
export {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    VERIFY_START,
    VERIFY_SUCCESS,
    VERIFY_FAILURE,
    loginAction,
    registerAction,
    verifyToken,
    verifySocial
} from './onboardingActions'

export {
    COURSE_DATA_START,
    COURSE_DATA_SUCCESS,
    COURSE_DATA_FAIL,
    SINGLE_COURSE_DATA_START,
    SINGLE_COURSE_DATA_SUCCESS,
    SINGLE_COURSE_DATA_FAIL,
    ADD_COURSE_DATA_START,
    ADD_COURSE_DATA_SUCCESS,
    ADD_COURSE_DATA_FAIL,
    EDIT_COURSE_DATA_START,
    EDIT_COURSE_DATA_SUCCESS,
    EDIT_COURSE_DATA_FAIL,
    DELETE_COURSE_DATA_START,
    DELETE_COURSE_DATA_SUCCESS,
    UPDATE_TAGS,
    DELETE_COURSE_DATA_FAIL,
    ADD_TAG_TO_COURSE_START,
    ADD_TAG_TO_COURSE_SUCCESS,
    ADD_TAG_TO_COURSE_FAIL,
    ADD_SECTION_START,
    ADD_SECTION_SUCCESS,
    ADD_SECTION_FAIL,
    UPDATE_SECTION_START,
    UPDATE_SECTION_SUCCESS,
    UPDATE_SECTION_FAIL,
    GET_SECTIONS_START,
    GET_SECTIONS_SUCCESS,
    GET_SECTIONS_FAIL,
    GET_DETAILED_COURSE_START,
    GET_DETAILED_COURSE_SUCCESS,
    GET_DETAILED_COURSE_FAIL,
    courseEndPoint,
    getCourseById,
    addCourse,
    editCourse,
    deleteCourse,
    addTagToCourse,
    getSectionsByCourseId,
    addSectionToCourse,
    updateSection,
    getDetailedCourse,
} from './courses'

export {
    TAGS_DATA_START,
    TAGS_DATA_SUCCESS,
    TAGS_DATA_FAILURE,
    ADD_TAGS_START,
    ADD_TAGS_SUCCESS,
    ADD_TAGS_FAILURE,
    DELETE_TAGS_START,
    DELETE_TAGS_SUCCESS,
    DELETE_TAGS_FAILURE,
    addTag,
    getTags
} from './tags'
// export {
//     GET_SECTIONS_START,
//     GET_SECTIONS_SUCCESS,
//     GET_SECTIONS_FAIL,
//     GET_SECTION_DETAILS_START,
//     GET_SECTION_DETAILS_SUCCESS,
//     GET_SECTION_DETAILS_FAIL,
//     GET_DETAILED_COURSE_START,
//     GET_DETAILED_COURSE_SUCCESS,
//     GET_DETAILED_COURSE_FAIL,
//     getSectionsByCourseId,
//     getDetailedCourse
// } from './sections'
