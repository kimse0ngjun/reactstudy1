import api from "./axios";
import type {
  BoardDto,
  BoardListResponse,
  Criteria,
  MemberDto,
  MemberResponse,
} from "../types/Community";

export const boardApi = {
  getList: (cri: Criteria) =>
    api.get<BoardListResponse>("/board/list", { params: cri }),
  getDetail: (id: number) => api.get<BoardDto>(`/board/detail/${id}`),
  insert: (formData: FormData) => api.post("/board/insert", formData),
  update: (formData: FormData) => api.put("board/update", formData),
  delete: (id: number) => api.delete(`board/delete/${id}`),
};

export const memberApi = {
  join: (data: MemberDto) => api.post<MemberResponse>("/member/join", data),
  login: (data: FormData) =>
    api.post<MemberResponse>("/member/loginProc", data),
  logout: () => api.post<MemberResponse>("/member/logout"),
  status: () => api.get<MemberResponse>("/member/status"),
};
