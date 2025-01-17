import { RequestResponseClient } from "@/types/request";
import { SortOrder } from "@/types/sort-order";
import { User } from "@/types/user";
import { sendRequest } from "@/utils/request";

interface GetUsersRequest {
    page: number
    limit: number
    sortOrder: SortOrder
    name?: string
}

interface GetUsersResponseData {
    users: User[]
}

export async function getUsers({ page, limit, sortOrder, name }: GetUsersRequest) {
    let endpoint = `/users?page=${page}&limit=${limit}&sortOrder=${sortOrder}`

    if (name) {
        endpoint = endpoint.concat(`&name=${name}`)
    }

    const { message, data }: RequestResponseClient<GetUsersResponseData> = await sendRequest({
        endpoint: endpoint,
        method: "GET"
    })

    return {
        message,
        data
    }
}