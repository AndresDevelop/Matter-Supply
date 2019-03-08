import * as DataRequestMethods from './dataRequestMethods';

/**
 * @description Request to get all the gist of a user
 * @param {String} user Value to search
 */
export const getGitsUser = user =>
  DataRequestMethods.executeDataRequest(`/users/${user}/gists`);

/**
 * @description Request to get a specific gist of a user
 * @param {string} id Value to search
 */
export const getGitDetail = id =>
  DataRequestMethods.executeDataRequest(`/gists/${id}`);

/**
 * @description Request to get info the user
 * @param {String} user Value to search
 */

export const getUserInfo = user =>
  DataRequestMethods.executeDataRequest(`/users/${user}`);

export const PostGits = () =>
  DataRequestMethods.executeDataRequest(`/gists`, 'POST', '', {
    description: 'Hello World Examples',
    public: true,
    files: {
      'hello_world.rb': {
        content:
          'class HelloWorld\n   def initialize(name)\n      @name = name.capitalize\n   end\n   def sayHi\n      puts "Hello !"\n   end\nend\n\nhello = HelloWorld.new("World")\nhello.sayHi',
      },
      'hello_world.py': {
        content:
          'class HelloWorld:\n\n    def __init__(self, name):\n        self.name = name.capitalize()\n       \n    def sayHi(self):\n        print "Hello " + self.name + "!"\n\nhello = HelloWorld("world")\nhello.sayHi()',
      },
      'hello_world_ruby.txt': {
        content: 'Run `ruby hello_world.rb` to print Hello World',
      },
      'hello_world_python.txt': {
        content: 'Run `python hello_world.py` to print Hello World',
      },
    },
  });
