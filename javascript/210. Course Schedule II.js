// https://leetcode.com/problems/course-schedule-ii/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
let courseState = {
    unvisited: 0,
    visiting: 1,
    visited: 2
};

var findOrder = function (numCourses, prerequisites) {
    let courses = Array.apply(null, { length: numCourses }).map((val, index) => {
        // Need to initialize for those courses which have no dependencies.
        return [index, {
            dependencies: [],
            state: courseState.unvisited
        }];
    });

    // Create the map for O(1) access.
    let courseDependenciesMap = new Map(courses);
    for (let i = 0; i < prerequisites.length; i++) {
        let [course, dependency] = prerequisites[i];
        // console.log(course);
        courseDependenciesMap.get(course).dependencies.push(dependency);
    }


    let courseOrder = [];
    let courseIterator = courseDependenciesMap.entries();
    for (const courseItem of courseIterator) {
        if (prepareCourseOrder(courseDependenciesMap, courseItem[0], courseOrder)) {
            // Cyclic dependency found.
            return [];
        }
    }

    return courseOrder;
};

var prepareCourseOrder = function (courseDependenciesMap, course, courseOrder) {
    let courseItem = courseDependenciesMap.get(course);
    switch (courseItem.state) {
        case courseState.unvisited:
            // Add courses without any dependencies to courseOrder result set.
            // Mark the item as visited to avoid visiting again.
            if (!courseItem.dependencies.length) {
                courseOrder.push(course);
                courseItem.state = courseState.visited;
            } else {
                courseItem.state = courseState.visiting;
                for (let i = 0; i < courseItem.dependencies.length; i++) {
                    if (prepareCourseOrder(courseDependenciesMap, courseItem.dependencies[i], courseOrder)) {
                        return true;
                    }
                }
                courseOrder.push(course);
                courseItem.state = courseState.visited;
            }
            break;
        case courseState.visiting:
            // Cyclic dependency, return.
            return true;
        case courseState.visited:
            // Do nothing as course is already taken care of.
            break;
    }
}