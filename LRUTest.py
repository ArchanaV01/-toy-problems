from LRU import LRU
class LRUTest:
    def main():
        lru_obj = LRU(3)

        #tc1
        assert lru_obj.get('a')==-1
        
        #tc2
        lru_obj.put('a',1)
        lru_obj.put('b',2)
        lru_obj.put('c',3)
        assert lru_obj.get('a')==1, 'Wrong Value'
        
        #tc3
        assert lru_obj.get_cache()== {'a':1, 'b':2, 'c':3}, 'Cache is not updated properly'
        
        #tc4
        lru_obj.put('d',4)
        
        #tc5
        assert len(lru_obj.get_cache())==3, 'capacity crossed'
        
        #tc6
        assert lru_obj.get('b')==-1, 'Least Recently Used is not being removed when capacity is crossed'

        print("All test cases passed!!")

    if __name__ == "__main__":
        main()