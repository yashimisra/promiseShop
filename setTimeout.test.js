const clock = require('./setTimeout.js');

describe('clock function', function() {
    it('The function should execute after 300 ms', () => {
      const spy = jest.spyOn(global, 'setTimeout');
      clock();    
      expect(spy).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
    it('should get executed at 300 ms and not after', () => {
      const spy = jest.spyOn(global, 'setTimeout');
      clock();    
      expect(spy).not.toHaveBeenLastCalledWith(expect.any(Function),1000);
    });
    it('should get executed at 300 ms and not before', () => {
      const spy = jest.spyOn(global, 'setTimeout');
      clock();    
      expect(spy).not.toHaveBeenLastCalledWith(expect.any(Function), 200);
    });
});