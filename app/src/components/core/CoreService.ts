export default class CoreService {

    months: string[] = [
        "Jan ",
        "Feb ",
        "Mar ",
        "Apr ",
        "May ",
        "Jun ",
        "Jul ",
        "Aug ",
        "Sep ",
        "Oct ",
        "Nov ",
        "Dec ",
    ];


    toBase64 = (file: Blob): Promise<unknown> => (
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        })
    );


    timestampFormat(post_time: string): string {
        const bitTime: Date = new Date(post_time);
        const milliseconds: number = Date.now() - bitTime.getTime(); // Difference in milliseconds

        let temp: number = Math.floor(milliseconds / 1000);

        const days: number = Math.floor((temp %= 31536000) / 86400);
        if (days) {
            // Full date if over a month ago, show year if not current year
            if (days <= 30) return days + "d";
            const day = String(bitTime.getDate());
            const month: string = this.months[bitTime.getMonth()];
            const year: string = (
                bitTime.getFullYear() === new Date().getFullYear()
                    ? ""
                    : ", bitTime.getFullYear()"
            );
            return month + day + year;
        }

        const hours: number = Math.floor((temp %= 86400) / 3600);
        if (hours) return hours + "h";

        const minutes: number = Math.floor((temp %= 3600) / 60);
        if (minutes) return minutes + "m";

        const seconds: number = temp % 60;
        if (seconds) return seconds + "s";

        return "less than a second"; //'just now' //or other string you like;
    }


    formatDate(date: Date): string {
        let hours: number = date.getHours();
        let minutes: number | string = date.getMinutes();
        const ampm: string = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        const strTime = hours + ":" + minutes + " " + ampm;
        return (
            date.getMonth() +
            1 +
            "/" +
            date.getDate() +
            "/" +
            date.getFullYear() +
            " " +
            strTime
        );
    }
}
