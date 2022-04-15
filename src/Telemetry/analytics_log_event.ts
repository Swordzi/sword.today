/* BSD 3-Clause License

 Copyright (c) 2022, Iiro Polso
 All rights reserved.
 */


import {getAnalytics, logEvent} from "firebase/analytics";

const analytics = getAnalytics();
logEvent(analytics, 'notification_received');
