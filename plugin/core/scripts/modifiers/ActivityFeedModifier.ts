import { IUserSettings } from "../../../common/scripts/interfaces/IUserSettings";
import * as d3 from 'd3';

export class ActivityFeedModifier implements IModifier {
    protected userSettings: IUserSettings;

    constructor(userSettings: IUserSettings) {
        this.userSettings = userSettings;
    }

    public modify(): void {
        if (this.userSettings.feedChronologicalOrder) {
            var feedItems: any[] = [];

            d3.selectAll('.activity.feed-entry, .group-activity.feed-entry, .post.feed-entry').datum(function() {
                console.log(this);
                var m = (d3.select(this).select('time').attr('datetime')).match(/([0-9]{4})-([0-9]{2})-([0-9]{2})[ ]?[T]?([0-9]{2}):([0-9]{2}):([0-9]{2})/);
                var d = Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]);
                feedItems.push(d);
                return d;
            });

            feedItems.sort(d3.descending);
            console.log(feedItems);
            d3.selectAll('.activity.feed-entry, .group-activity.feed-entry, .post.feed-entry').data(feedItems, function(d) {
                return d
            }).order();
        }
    }
}