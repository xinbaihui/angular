import { GENDER } from './model'

export const participants = [{
  id: 1,
  name: 'xf',
  gender: GENDER.MALE,
  character: 'Daddy'
}, {
  id: 2,
  name: 'xbh',
  gender: GENDER.FEMALE,
  character: 'Mommy'
}, {
  id: 3,
  name: 'xy',
  gender: GENDER.MALE,
  character: 'Kid'
}]

export const chatContents = [{
  content: 'I am DD.',
  sourceName: 'xy',
  sourceId: 2,
  time: '2019-05-27 14:00:00'
}, {
  content: 'I love mommy.',
  sourceName: 'xy',
  sourceId: 2,
  time: '2019-05-27 14:00:00'
}]