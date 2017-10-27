export class RunningDetailedAnalysis implements IModifier {

    private activityId: number;

    constructor(activityId: number) {
        this.activityId = activityId;
    }

    public modify(): void {

        let html: string = "<li class='group'>";
        html += "<div class='title' style='cursor: pointer;'>Detailed Analysis</div>";
        html += "</li>";

        $('[data-menu="segments"]').parent().prepend($(html));
    }
}
