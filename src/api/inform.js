/*公告和协议*/
import request from "@/uitls/request";

export function noticeList(data) {
    return request({
        url: '/notice/notices',
        data
    })
}

/*info*/
export function noticeInfo(data) {
    return request({
        url: `/notice/${data.noticeId}/noticeInfo`,
        data
    })
}
