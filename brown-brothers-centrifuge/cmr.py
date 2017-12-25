""" Script to track and analyse monitoring data from the centrifuge
    of juices at Brown Brothers winery in Milawa.
    CMR (Centrifuge Monitoring Record)
    
    Data is collected manually on-site, compiled into a comma-delimited
    csv for input reading from this script.
    
    Author: Josh Bairstow (joshbairstow@gmail.com)
    
"""
# imports and dependencies.
import matplotlib.pyplot as plt

from cmr_class import *
from cmr_func import *

# initial variables
version = '1.0'
cmr_default = 'CentrifugeMonitoringRecords.csv'
    # data model holder
log_sheets = []

# record a reference for the number of input columns in the monitoring records for read checking.
# currently: 13. date, wine code, wine id, time, product flow, ntu, ejection interval, feed solids,
#     product solids, product turb, sludge solids, nitrogen, total product volume.
NUM_RECORD_COLS = 13
WINE_CODES = [
    'ALI',  # Aglianco
    'ARN',  # Arneis
    'BAR',  # Barbera
    'CAM',  # Carmenere
    'CAS',  # Cabernet Sauvignon
    'CHB',  # Chenin Blanc
    'CHY',  # Chardonnay
    'CNA',  # Cienna
    'COL',  # Colombard
    'CRO',  # Crouchen
    'DMB',  # ?
    'DOL',  # Dolcetto
    'DOV',  # ?
    'DUR',  # Durif
    'FLO',  # Flora
    'GOR',  # Gordo
    'GRA',  # Graciano
    'GRV',  # Gruner Veltiner
    'LEY',  # ?
    'MAL',  # Malbec
    'MER',  # Merlot
    'MEU',  # Pinot Meunier
    'MGL',  # ?
    'MON',  # Mondeuse
    'MOS',  # Moscato
    'MTP',  # Montepulciano
    'NED',  # Nero D'Avola
    'OMU',  # Orange Muscat
    'PEV',  # Petit Verdot
    'PIG',  # Pinot Grigio
    'PIN',  # Pinot Noir
    'PRO',  # Prosecco
    'RHR',  # Riesling
    'ROU',  # Roussanne
    'RUC',  # Ruby Cabernet
    'SAP',  # Saperavi
    'SAB',  # Sauvignon Blanc
    'SAG',  # Sagrantino
    'SAN',  # Sangiovese
    'SAV',  # Savagnin
    'SCH',  # Schioppettino
    'SHZ',  # Shiraz
    'SUL',  # Sultana
    'TAR',  # Tarrango
    'TEM',  # Tempranillo
    'TRA',  # Traminer
    'TYR',  # Tyrian
    'VER',  # Verdelho
    'VRM',  # Vermentino
    'VIO'   # Viognier
    ]
    
        
''' main scripting path for model setup. not looped as only planned to be run dynamically.

'''
def main():
    # pull filename from user.
    cmrecords = inputRecordFile(cmr_default)
    # open input file.
    o_cmrecords = openRecordFile(cmrecords)
    # read and check the header line.
    trackRecordHeader(o_cmrecords,cmrecords)
    
    # loop log file and read into data model.
    EOF = False
    while EOF == False:
        # readRawEntry returns a tuple with a boolean flag for EOF as the first argument and
        # a list of strings corresponding to fields of that entry line as the second.
        raw_entry = readRawEntry(o_cmrecords, NUM_RECORD_COLS)
        EOF = raw_entry[0]
        
        # process generated entry list into the data model.
        # log_sheets holds a list of log sheet classes that in turn holds a list of entries for
        # that sheet that are formatted in a namedtuple from the collections module.
        # end of file condition added so final readline return isn't passed.
        if EOF == False:
            processEntry(log_sheets, raw_entry[1])
    else:
        # entry logging completed, output some logging statistics to the user. and close file.
        trackEndOfProcessing(log_sheets)
        o_cmrecords.close()
   

def makeSPGraph(sheets = log_sheets):
    ''' function to take parameters for wine and set point of interest, collect the relevant data lists,
        call any analysis required of them and then produce the appropriate plot using the matplotlib
        library.
        
        TODO: implement plot style sheets.
    
    '''
    # get a valid wine code from the user.
    wine = checkWineCode(WINE_CODES)
    # x and y data list calls.
    data_x, data_y = getWineRecordData(wine,'prod_turb','prod_solids',sheets)
    # get a valid target set point from the user.
    sp_target = getUserSetPoint()
    # x and y of set point calculations.
    sp_x, sp_y = getWineSetPoint(sp_target,data_x,data_y)
    # plot results
    plt.plot(data_x,data_y,'ro')
    plt.plot(sp_x,sp_y,'gs')
    plt.title('Data for %s. Suggested set point: %s' % (wine,int(round(sp_x,-1))))
    plt.xlabel('Product Turbidity')
    plt.ylabel('Product Solids')
    plt.show()
    
    # poor mans hold screen
    input('Press any key to continue')
    plt.close()
    
def listMonitoredWines(sheets = log_sheets):
    ''' make and output a list of wine codes corresponding to wines that have at least one monitoring sheet recorded.
    
    '''
    wine_codes = []
    for sheet in sheets:
        for code in wine_codes:
            if sheet.getWine() == code:
                break
        else:
            wine_codes.append(sheet.getWine())
    
    print()
    print('List of available wines: ')
    print(wine_codes)
    
    

# console output reminder message of functions available to the module on import.
print()
print('CMR functions available')
print('main() - take and process monitoring records file.')
print('makeSPGraph(sheets (optional, takes main output as a default)) - produce set point graph for given parameters.')
print('listMonitoredWines(sheets (optional)) - output the list of wines that have recording sheets on record.')
print()