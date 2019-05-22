const formatFiltersToODataQuery = require('../../index').formatFiltersToODataQuery;
const expect = require('chai').expect;

describe('advanced format filter to odata query', () => {
    it('eq = array', async () => {
        let filters = [
            ["status", "=", ["closed", "open"]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((status eq 'closed') or (status eq 'open'))");
    });
    it('ne <> array', async () => {
        let filters = [
            ["status", "<>", ["closed", "open"]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((status ne 'closed') and (status ne 'open'))");
    });
    it('contains array', async () => {
        let filters = [
            ["tag", "contains", ["start", "end"]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((contains(tag,'start')) or (contains(tag,'end')))");
    });
    it('notcontains array', async () => {
        let filters = [
            ["tag", "notcontains", ["start", "end"]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((not contains(tag,'start')) and (not contains(tag,'end')))");
    });
    it('startswith array', async () => {
        let filters = [
            ["tag", "startswith", ["start", "end"]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((startswith(tag,'start')) or (startswith(tag,'end')))");
    });
    it('notstartswith array', async () => {
        let filters = [
            ["tag", "notstartswith", ["start", "end"]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((not startswith(tag,'start')) and (not startswith(tag,'end')))");
    });
    it('endswith array', async () => {
        let filters = [
            ["tag", "endswith", ["start", "end"]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((endswith(tag,'start')) or (endswith(tag,'end')))");
    });
    it('notendswith array', async () => {
        let filters = [
            ["tag", "notendswith", ["start", "end"]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((not endswith(tag,'start')) and (not endswith(tag,'end')))");
    });
    it('between array<number,number>', async () => {
        let filters = [
            ["age", "between", [20, 30]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((age ge 20) and (age le 30))");
    });
    it('between array<null,number>', async () => {
        let filters = [
            ["age", "between", [null, 30]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((age le 30))");
    });
    it('between array<number,null>', async () => {
        let filters = [
            ["age", "between", [20, null]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((age ge 20))");
    });
    it('between array<date,date>', async () => {
        let filters = [
            ["age", "between", [new Date('2019-05-22T09:00:00.000Z'), new Date('2019-05-22T18:00:00.000Z')]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((age ge 2019-05-22T17:00:00Z) and (age le 2019-05-23T02:00:00Z))");
    });
    it('between array<null,date>', async () => {
        let filters = [
            ["age", "between", [null, new Date('2019-05-22T18:00:00.000Z')]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((age le 2019-05-23T02:00:00Z))");
    });
    it('between array<date,null>', async () => {
        let filters = [
            ["age", "between", [new Date('2019-05-22T09:00:00.000Z'), null]]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("((age ge 2019-05-22T17:00:00Z))");
    });
    it('filter is a function', async () => {
        let filters = function () {
            return [
                ["object_name", "=", "project_issues"], 'or', ["object_name", "=", "tasks"]
            ];
        }
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("(object_name eq 'project_issues') or (object_name eq 'tasks')");
    });
    it('filter value is a function', async () => {
        let filters = [
            ["object_name", "=", ()=>{
                return "project_issues";
            }], 'or', ["object_name", "=", "tasks"]
        ];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("(object_name eq 'project_issues') or (object_name eq 'tasks')");
    });
    it('filter item is a json object', async () => {
        let filters = [{
            "field": "object_name",
            "operation": "=",
            "value": "project_issues"
        }, 'or', ["object_name", "=", "tasks"]];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("(object_name eq 'project_issues') or (object_name eq 'tasks')");
    });
    it(`filter item is a json object and it's value is a function`, async () => {
        let filters = [{
            "field": "object_name",
            "operation": "=",
            "value": ()=>{
                return "project_issues"
            }
        }, 'or', ["object_name", "=", "tasks"]];
        let result = formatFiltersToODataQuery(filters);
        console.log("odata filters query result:", result);
        expect(result).to.be.eq("(object_name eq 'project_issues') or (object_name eq 'tasks')");
    });
});
