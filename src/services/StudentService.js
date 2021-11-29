import http from "../http-common";

const getAll = () => {
  return http.get("students.student");
};

const get = id => {
  return http.get(`students.student/${id}`);
};

const create = data => {
  return http.post("students.student", data);
};

const update = (id, data) => {
  return http.put(`students.student/${id}`, data);
};

const remove = id => {
  return http.delete(`students.student/${id}`);
};

const removeAll = () => {
  return http.delete(`students.student`);
};

const findByTitle = title => {
  return http.get(`students.student?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
