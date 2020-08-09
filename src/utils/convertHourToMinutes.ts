export default function convertHourToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutrs = (hour * 60) + minutes;

    return timeInMinutrs;
}