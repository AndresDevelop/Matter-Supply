import moment from 'moment';

const now = moment(new Date());


export const formatDate = (value, format) => moment(String(value)).format(format);
export const monthDifference = value => moment(now).diff(new Date(value), 'months');
export const diffMonths = `${monthDifference} months ago`;
