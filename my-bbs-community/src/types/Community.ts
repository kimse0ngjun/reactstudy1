export interface BoardDto {
  boardId: number;
  amount: number;
  skip: number;
  title: string;
  contents: string;
  hitCnt: number;
  createdDatetime: string;
  creatorId: string;
  updatedDatetime: string;
  updaterId: string;
}

export interface FileDto {
  fileIdx: number;
  boardId: number;
  originalFileName: string;
  storedFilePath: string;
  fileSize: number;
  creatorId: string;
}

export interface MemberDto {
  userId: string;
  password: string;
  userName: string;
  role: string;
}

export interface Criteria {
  pageNum: number;
  amount: number;
  skip: number;
}

export interface PageResponse {
  startPage: number;
  endPage: number;
  total: number;
  prev: boolean;
  next: boolean;
  cri: Criteria;
}

export interface BoardListResponse {
  list: BoardDto[];
  pageMaker: PageResponse;
}

export interface MemberResponse {
  status: "success" | "error";
  message: string;
  userId?: string;
  isLogin?: boolean;
}
