''' class definitions

'''

from collections import namedtuple

# defining namedtuples (new class def)
LogEntry = namedtuple('LogEntry','time product_flow eject_interval feed_solids product_solids product_turb sludge_solids')

class LogSheet(object):
    ''' holder for individual monitoring record sheets 
    
    '''
    def __init__(self,date,wine_code,wine_id,nitrogen,total_volume):
        self.date = date
        self.wine_code = wine_code
        self.wine_id = wine_id
        self.nitrogen = nitrogen
        self.total_volume = total_volume
        self.log = []
        
    def getYear(self):
        return int(self.date[6:])
        
    def getWine(self):
        return self.wine_code[5:8]
        
    def description(self):
        print('Log sheet taken on %s for Wine code: %s' % (self.date, self.wine_code))