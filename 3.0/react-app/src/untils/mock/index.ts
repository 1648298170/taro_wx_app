import Mock from 'mockjs'
import data from './data'
 
Mock.mock('http://api/users', 'get', data.items)