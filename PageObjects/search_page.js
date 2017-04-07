/**
 * Created by Keshav on 04/04/2017.
 */

var search_page = function() {


    this.dashboard_Slots = function() {
        var dashboard_Slots =element(by.xpath("//nav[@id='navigation-main']/ul/li[1]/a"));
        expect(dashboard_Slots.isPresent()).toBe(true,'Dashboard Slots Element Not found');

        return dashboard_Slots;
    };

};
module.exports = new search_page();