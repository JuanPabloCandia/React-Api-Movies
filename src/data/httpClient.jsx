const API = "/api";
export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY5NmU0MDIwYTZlMGM1ZGI0ZWRlNGNhNTgyNDRkNSIsInN1YiI6IjY2NGUyZTFjMzdmZDM0OWE5OGZkMTU3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KJi45zTffWLTu_sN38udDQDL4h8C72ZWi3dAxf3x_fM",
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then((result) => result.json());
}
