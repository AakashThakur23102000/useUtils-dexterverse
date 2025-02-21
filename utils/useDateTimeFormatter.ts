type DateFormat =
    | 'YYYY-MM-DD'
    | 'DD-MM-YYYY'
    | 'MM/DD/YYYY'
    | 'YYYY/MM/DD'
    | 'YYYY-MM-DD HH:mm:ss'
    | 'YYYY-MM-DD HH:mm:ss.SSS'
    | 'DD MMM, YYYY'
    | 'MMM DD, YYYY'
    | 'dddd, MMMM DD, YYYY'
    | 'YYYY-MM-DDTHH:mm:ssZ'
    | 'DD/MM/YYYY HH:mm:ss'
    | 'YYYY/MM/DD HH:mm:ss'
    | 'DD/MM/YYYY HH:mm'
    | 'HH:mm'
    | 'YYYY-MM-DD HH:mm'
    | 'MMMM YYYY'
    | 'YYYY-MM-DD hh:mm A'
    | 'HH:mm:ss.SSS'
    | 'hh:mm A'
    | 'MMMM D, YYYY'
    | 'D MMM YYYY'
    | 'D-MMMM-YYYY'
    | 'M/DD/YYYY'
    | 'M/DD/YYYY HH:mm'
    | 'DD/MM/YYYY hh:mm:ss A'
    | 'YYYY.MM.DD hh:mm A'
    | 'M/D/YYYY'
    | 'YY/MM/DD'
    | 'M/D/YY'
    | 'M-YYYY'
    | 'DD-MM-YY'
    | 'MMMM DD, YYYY'
    | "HH:MM:SS"
    ;

const useDateFormatterFormatters: Record<DateFormat, (d: Date) => string> = {
    'YYYY-MM-DD': (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`,
    'DD-MM-YYYY': (d) => `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`,
    'MM/DD/YYYY': (d) => `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`,
    'YYYY/MM/DD': (d) => `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`,
    'YYYY-MM-DD HH:mm:ss': (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`,
    'YYYY-MM-DD HH:mm:ss.SSS': (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}.${String(d.getMilliseconds()).padStart(3, '0')}`,
    'DD MMM, YYYY': (d) => `${String(d.getDate()).padStart(2, '0')} ${d.toLocaleString('en-US', { month: 'short' })}, ${d.getFullYear()}`,
    'MMM DD, YYYY': (d) => `${d.toLocaleString('en-US', { month: 'short' })} ${String(d.getDate()).padStart(2, '0')}, ${d.getFullYear()}`,
    'dddd, MMMM DD, YYYY': (d) => `${d.toLocaleString('en-US', { weekday: 'long' })}, ${d.toLocaleString('en-US', { month: 'long' })} ${String(d.getDate()).padStart(2, '0')}, ${d.getFullYear()}`,
    'YYYY-MM-DDTHH:mm:ssZ': (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}T${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}Z`,
    'DD/MM/YYYY HH:mm:ss': (d) => `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`,
    'YYYY/MM/DD HH:mm:ss': (d) => `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`,
    'DD/MM/YYYY HH:mm': (d) => `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`,
    'HH:mm': (d) => `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`,
    'YYYY-MM-DD HH:mm': (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`,
    'MMMM YYYY': (d) => `${d.toLocaleString('en-US', { month: 'long' })} ${d.getFullYear()}`,
    'YYYY-MM-DD hh:mm A': (d) => `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')} ${String(d.getHours() % 12 || 12).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')} ${d.getHours() >= 12 ? 'PM' : 'AM'}`,
    'HH:mm:ss.SSS': (d) => `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}.${String(d.getMilliseconds()).padStart(3, '0')}`,
    'hh:mm A': (d) => `${String(d.getHours() % 12 || 12).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')} ${d.getHours() >= 12 ? 'PM' : 'AM'}`,
    'MMMM D, YYYY': (d) => `${d.toLocaleString('en-US', { month: 'long' })} ${d.getDate()}, ${d.getFullYear()}`,
    'D MMM YYYY': (d) => `${d.getDate()} ${d.toLocaleString('en-US', { month: 'short' })} ${d.getFullYear()}`,
    'D-MMMM-YYYY': (d) => `${d.getDate()}-${d.toLocaleString('en-US', { month: 'long' })}-${d.getFullYear()}`,
    'M/DD/YYYY': (d) => `${d.getMonth() + 1}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`,
    'M/DD/YYYY HH:mm': (d) => `${d.getMonth() + 1}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`,
    'DD/MM/YYYY hh:mm:ss A': (d) => `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()} ${String(d.getHours() % 12 || 12).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')} ${d.getHours() >= 12 ? 'PM' : 'AM'}`,
    'YYYY.MM.DD hh:mm A': (d) => `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')} ${String(d.getHours() % 12 || 12).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')} ${d.getHours() >= 12 ? 'PM' : 'AM'}`,
    'M/D/YYYY': (d) => `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`,
    'YY/MM/DD': (d) => `${String(d.getFullYear()).slice(2)}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`,
    'M/D/YY': (d) => `${d.getMonth() + 1}/${d.getDate()}/${String(d.getFullYear()).slice(2)}`,
    'M-YYYY': (d) => `${d.getMonth() + 1}-${d.getFullYear()}`,
    'DD-MM-YY': (d) => `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getFullYear()).slice(2)}`,
    'MMMM DD, YYYY': (d) => `${d.toLocaleString('en-US', { month: 'long' })} ${String(d.getDate()).padStart(2, '0')}, ${d.getFullYear()}`,
    'HH:MM:SS': (d) => `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`,
};

export function useDateTimeFormatter(date: Date, format: DateFormat): string {
    if (useDateFormatterFormatters.hasOwnProperty(format)) {
        return useDateFormatterFormatters[format](date);
    } else {
        return '';
    }
};
