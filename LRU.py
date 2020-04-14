import queue

class LRU:
    def __init__(self, max_size):
        if (max_size <= 0):
            raise ValueError("Size should be greater than zero")
        self.max_size = max_size
        self.obj_q = queue.deque(maxlen=max_size)
        self.content_map = {}

    def put(self, key, value):
        if key in self.content_map:
            self.obj_q.remove(key)
        elif self.max_size <= len(self.content_map):
            removed_key = self.obj_q.pop()
            del self.content_map[removed_key]
        self.obj_q.appendleft(key)
        self.content_map[key] = value

    def get(self, key):
        if key in self.content_map:
            self.obj_q.remove(key)
            self.obj_q.appendleft(key)
            return self.content_map[key]
        return -1

    def get_cache(self):
        return self.content_map
