import queue

class LRUCache:

	def __init__(self, max_size):
		if (max_size <= 0):
			raise ValueError("Size should be greater than zero")
		self.max_size = max_size
        self.obj_q = queue.deque(maxlen=max_size)
        self.content_map = {}
		
