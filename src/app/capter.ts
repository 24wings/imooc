
export class Capter {
    title: string;
    // videos: { name: string, url: string }[];
    constructor(public videos: { name: string, url?: string, videoId: string, mediaInfo?: MediaInfo }[] = []) { }
}



export class Subject {
    no: number;
    title: string;

    constructor(public capters: Capter[] = []) { }
}


export class MediaInfo {
    result: boolean;
    data: {
        result: {
            mid: number,
            mpath: [string], // 0,1,2 低中高视频
            cpid: string, // 课程id
            name: string,
            time: number,
            partise: any
        }
    };
    msg: string;
}