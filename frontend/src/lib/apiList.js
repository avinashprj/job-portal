export const server = "https://job-portal-backend.fly.dev";

const apiList = {
    login: `${server}/auth/login`,
    signup: `${server}/auth/signup`,
    uploadResume: `${server}/upload/resume`,
    uploadProfileImage: `${server}/upload/profile`,
    jobs: `${server}/api/jobs`,
    applications: `${server}/api/applications`,
    rating: `${server}/api/rating`,
    user: `${server}/api/user`,
    applicants: `${server}/api/applicants`,
};

export default apiList;
