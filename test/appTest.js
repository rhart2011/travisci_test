const assert = require('chai').assert;
const app = require('../app');

describe('App',function(){
    
    describe('sayHello()',function(){
             it('sayHello should return hello',function(){
        let result = app.sayHello();
         assert.equal(result,'hello');
        });
       
    });
    
    
    describe('isPrime()',function(){
        it('should return if number is prime',function(){
            let result = app.isPrime(2);
            assert.equal(result,true);
        });
        
    });
    
    /*
    describe('sayHello()',function(){
             it('sayHello should return hello',function(){
        let result = app.sayHello();
         assert.equal(result,'hello');
        });

        it('sayHello should return a string', function(){
           let result = app.sayHello();
            assert.typeOf(result,'string');
           });
    });
   
    describe('addNumbers()',function(){
        it('add numbers should be above 5', function(){
            let result = app.addNumbers(5,5);
            assert.isAbove(result,5);
        });

        it('addNumbers should return type number',function(){
            let result = app.addNumbers(1,1);
            assert.typeOf(result,'number');
        });
    });
    */
});