export default {
  get: jest.fn().mockResolvedValue({ data: [] }),
  post: jest.fn().mockResolvedValue({ data: {} }),
  delete: jest.fn().mockResolvedValue({ id: "" }),
  put: jest.fn().mockResolvedValue({ id: "", data: {} }),
};
