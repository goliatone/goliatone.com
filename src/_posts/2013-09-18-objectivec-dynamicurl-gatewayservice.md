---
title: "Objectivec Dynamicurl Gatewayservice"
date: 2013-09-17
template: "post.hbs"
---



https://gist.github.com/goliatone/6616995

```objective-c
//
//  GServiceGateway.h
//
//

#import <Foundation/Foundation.h>

@interface GServiceGateway : NSObject


- (BOOL)connectionPOST:(NSString *)url
            withParams:(NSDictionary *)aDictionary;

- (BOOL)connectionPOST:(NSString *)url
            withString:(NSString *)aString;
@end
```

```objective-c
//
//  GServiceGateway.m
//

#import "GServiceGateway.h"

@implementation GServiceGateway

- (BOOL)connectionPOST:(NSString *)url
            withParams:(NSDictionary *)aDictionary {

    if ([aDictionary count] > 0) {
        NSMutableURLRequest *request = [[NSMutableURLRequest alloc]
                                        initWithURL:[NSURL URLWithString:url]
                                        ];
        [request setHTTPMethod:@"POST"];

        NSMutableString *postString = [[NSMutableString alloc] init];
        NSArray *allKeys = [aDictionary allKeys];
        for (int i = 0; i < [allKeys count]; i++) {
            NSString *key = [allKeys objectAtIndex:i];
            NSString *value = [aDictionary objectForKey:key];
            [postString appendFormat:( (i == 0) ? @"%@=%@" : @"&%@=%@" ), key, value];
        }

        NSString *postLength = [NSString stringWithFormat:@"%d", [postString length]];

        [request setValue:postLength forHTTPHeaderField:@"Content-Length"];

        [request setValue:@"application/x-www-form-urlencoded" forHTTPHeaderField:@"Content-Type"];

        [request setHTTPBody:[postString dataUsingEncoding:NSUTF8StringEncoding]];

        [NSURLConnection connectionWithRequest:request delegate:self];

        postString = nil;

        request = nil;

        return YES;
    } else {
        return NO;
    }
}

- (BOOL)connectionPOST:(NSString *)url
            withString:(NSString *)aString {


        NSMutableURLRequest *request = [[NSMutableURLRequest alloc]
                                         initWithURL:[NSURL URLWithString:url]
                                       ];

        [request setHTTPMethod:@"POST"];

        [request setValue:@"application/x-www-form-urlencoded" forHTTPHeaderField:@"Content-Type"];

        NSString *postLength = [NSString stringWithFormat:@"%d", [aString length]];

        [request setValue:postLength forHTTPHeaderField:@"Content-Length"];

        [request setHTTPBody:[aString dataUsingEncoding:NSUTF8StringEncoding]];

        [NSURLConnection connectionWithRequest:request delegate:self];

        request = nil;

        return YES;
}

@end
```

```objective-c
- (void)locationUpdate:(CLLocation *)aLocation {

    self.location = aLocation;

    double latDouble = [self.location coordinate].latitude;
    double lonDouble = [self.location coordinate].longitude;

    locLabel.text = [NSString stringWithFormat:@"Lat: %f Lon: %f", latDouble, lonDouble];


    //TODO: Format timestamp for display?
    NSDate *date = [self.location timestamp];
    NSTimeInterval interval = [date timeIntervalSince1970];
    NSInteger timestamp = round(interval);

    timeLabel.text = [NSString stringWithFormat:@"Time: %ld", (long)timestamp];


    NSNumber* lon = [NSNumber numberWithDouble:latDouble];
    NSNumber* lat = [NSNumber numberWithDouble:lonDouble];

    //TODO: get actual values...

    NSString* uid = [(GAppDelegate *)[[UIApplication sharedApplication] delegate] UID];
    NSString* sid = [(GAppDelegate *)[[UIApplication sharedApplication] delegate] SID];

    GPayload* payload = [[GPayload alloc] initWithUid:uid sid:sid];

    NSDictionary* loc = [NSDictionary dictionaryWithObjectsAndKeys:lon,@"lon", lat, @"lat",nil];

    [payload setPayload:self.luminosity
             location:loc
             timestamp:&timestamp];

    payloadObject = [NSMutableDictionary dictionary];

    NSString* json = [payload getAsJsonString:payloadObject];

    NSLog(@"json: %@", json);


    GServiceGateway* gateway = [[GServiceGateway alloc] init];

    //TODO: Get the IP/end point url from a config file :)http://localhost:9090/api/darkness
    NSString* url = @"http://178.79.145.84:8080/api/darkness";
    NSDictionary* data = [NSDictionary dictionaryWithObjectsAndKeys:json,@"data", nil];

    [gateway connectionPOST:url withParams:data];

}
```