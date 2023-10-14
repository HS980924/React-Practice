import dayjs from "dayjs";

export const timeTrans = (time) =>{
    if(dayjs(time).hour() > 12){
        return dayjs(time).format('YYYY.MM.DD. 오후 HH:mm');
    }
    return dayjs(time).format('YYYY.MM.DD. 오전 HH:mm');
};