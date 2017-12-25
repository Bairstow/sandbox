''' function definitions

'''

from cmr_class import *

def inputRecordFile(cmr_default):
    # user file selection and checking
    print('Current default monitoring record is: %s' % cmr_default)
    rec_in = input('If you wish to use this file press enter, or else enter a new filename:')
    
    # if no value entered for the monitoring file return the default.
    if rec_in == '':
        print('Using the default file: %s' % cmr_default)
        return cmr_default
    elif rec_in[len(rec_in)-4:] != 'csv':
        print('The input file was not the required csv filetype.')
        return input_record_file()
    else:
        print('The file name entered: %s' % record_in)
        rec_correct = input('If this is correct press enter, or else type no to re-input.')
        if rec_correct == '':
            return rec_in
        else:
            return input_record_file()
            
def openRecordFile(fname):
    # open the monitoring record file and passed back after verifying it's readable.
    try:
        fopen = open(fname,'r')
        return fopen
    except IOError as err:
        print('I/O error: %s' % err)
        
def trackRecordHeader(fopen,fname):
    ''' read the initial header line of the csv file.
        verify that there is content in the file.
        verify that first header listed is the 'Date' column and then output the file is being read.
        
    '''
    header = fopen.readline()
    first_entry = []
    if len(header) > 0:
        for char in header:
            # comma delimited csv file, we are reading for the first entry of the header only.
            if char != ',':
                first_entry.append(char)
            else:
                break
        
        if ''.join(first_entry) == 'Date':
            print()
            print('File headers read successfully from %s' % fname)
        else:
            raise ValueError('Unexpected file headers encountered in input records file.')
        
    else:
        raise IOError('No data able to be read from given input records file.')

def readRawEntry(fopen, num_cols):
    ''' take the open file record. read an entry line. check the end of file hasn't been
        reached, and then return a tuple with the first entry as a boolean flag signifying 
        EOF. then a second entry with all comma delimited fields as strings, using empty 
        strings where no entry is made.
    
    '''
    raw = fopen.readline()
    
    ''' added check for entry error by having a second readline check, although this should
        never be necessary because empty entries in the csv file will still generate comma
        delimitations for an empty field.
        
        possibly re-write with the readlines function?
    
    '''
    raw_entry = []
    eof_flag = False
    
    if len(raw) == 0:
        raw = fopen.readline()
        if len(raw) == 0:
            eof_flag = True
            return (eof_flag, raw_entry)
            
           
    cur_field = []           
    for char in raw:
        if char != ',':
            cur_field.append(char)
        else:
            raw_entry.append(''.join(cur_field))
            cur_field = []
    else:
        # when all line entries are logged check the number is equal to the expected number
        # of columns and add a requisite number of empty entries if not.
        if len(raw_entry) != num_cols:
            for i in range(num_cols - len(raw_entry)):
                raw_entry.append('')
        
    return (eof_flag, raw_entry)
            
def processEntry(sheets,entry):
    ''' single entry processing of monitoring data from file into the data model.
    
        the sheets argument is a list of log sheet class objects that will hold their own 
        list of associated monitoring entry records.
        
        the entry argument is the raw list of strings associated with the data fields on
        the manual entry monitoring sheets at the winery. the first entry for a sheet
        contains information such as recording date and wine type in addition to the monitoring
        data and resultingly can be used to differentiate between individual monitoring sheets.
        
        the strings present in the entry list correspond to the following variables:
            0    date
            1    wine code
            2    wine id
            3    time
            4    product flow
            5    ntu
            6    ejection interval
            7    feed solids
            8    product solids
            9    product turbidity
            10   sludge solids
            11   nitrogen
            12   total product volume
    
    '''
    
    # initial check to see if the date variable is present and if it is append a new log sheet
    # class object to the sheets collection list. date entry format 'dd/mm/yy'
    if len(entry[0]) == 8:
        # new monitoring sheet recorded
        # class instantiation - LogSheet(date,wine code,wine_id,nitrogen,total_volume)
        # nitrogen and volume are recorded as values, making check to see if present and passing in
        # a flag value of -1 if they are not.
        if len(entry[11]) > 0:
            nitrogen = int(entry[11])
        else:
            nitrogen = -1
            
        if len(entry[12]) > 0:
            total_volume = int(entry[12])
        else:
            total_volume = -1
        
        sheets.append(LogSheet(entry[0],entry[1],entry[2],nitrogen,total_volume))
        
    # the current log entry always belongs to the latest log sheet.
    # assign it as such after checking and type casting each of the entry variables as necessary.
    # all log entry data should be numerical except for the time which will be kept as a string and
    # converted to timestamp values when used later. flag values of -1 will be placed where no value
    # has been entered.
    # a change in data entry methods mean that the ntu variable where present is equivalent to
    # product turbidity and so will be assigned this way.
    if len(entry[4]) == 0:
        p_flow = -1
    else:
        p_flow = int(entry[4])
        
    if len(entry[5]) > 0:
        p_turb = int(entry[5])
    else:
        if len(entry[9]) == 0:
            p_turb = -1
        else:
            p_turb = int(entry[9])
        
    if len(entry[6]) == 0:
        e_int = -1
    else:
        e_int = int(entry[6])
        
    if len(entry[7]) == 0:
        f_solids = -1
    else:
        f_solids = float(entry[7])
    
    if len(entry[8]) == 0:
        p_solids = -1
    else:
        p_solids = float(entry[8])
        
    if len(entry[10]) == 0:
        s_solids = -1
    else:
        s_solids = float(entry[10])
        
    
    # entry details appended in namedtuple form LogEntry defined in cmr_class
    sheets[-1].log.append(LogEntry(
        time = entry[3], 
        product_flow = p_flow, 
        eject_interval = e_int, 
        feed_solids = f_solids,
        product_solids = p_solids,
        product_turb = p_turb,
        sludge_solids = s_solids))    
            
    
def trackEndOfProcessing(sheets):
    ''' end of file output function.
    
    '''
    sheet_entries = [len(sheets[i].log) for i in range(len(sheets))]
    
    print()
    print('Monitoring records file read successfully.')
    print('%s monitoring sheets with a total of %s entries were recorded.' % (len(sheets),sum(sheet_entries)))
    print()
    
    
def checkWineCode(codes):
    ''' obtain and return a valid 3 letter wine code from the user.
    
    '''
    wine = input('Enter a valid 3 letter wine code for analysis: ')
    wine = wine.upper()
    
    for code in codes:
        if wine == code:
            ('Wine found on listed wines available')
            break
    else:
        print('No wine found on list matching that wine code.')
        wine = checkWineCode(codes)
        
    return wine
    
    
def getWineRecordData(wine,x_prop,y_prop,sheets):
    ''' cycles through the sheets model data and returns a list of the appropriate dataset.
    
        TODO: implement a fuller list of available wine properties. currently always pulling product turbidity for the x
        dataset and product solids for the y dataset.
    
    '''
    data_x = []
    data_y = []
    for sheet in sheets:
        if sheet.getWine() == wine:
            for entry in sheet.log:
                # check entry is valid for both parameters. flag value of -1 for invalid entries in initial data read.
                if (entry.product_turb > 0 and entry.product_solids > 0):
                    data_x.append(entry.product_turb)
                    data_y.append(entry.product_solids)
                    
    print('%s valid entries found for %s recording sheets.' % (len(data_x),wine))
    return (data_x,data_y)
    

def getUserSetPoint():
    ''' obtain a target set point from the user.
    
    '''
    sp = float(input('Input a target product solids percentage for set point calculations (0<100): '))
    if (sp > 0.0 and sp < 100.0):
        pass
    else:
        print('Invalid value for target solids entered.')
        sp = getUserSetPoint()
    return sp
 
 
def getWineSetPoint(sp_target,data_x,data_y):
    ''' calculate a suggested set point for the input data.
    
        data_x currently always product turbidity, data_y product solids.

    '''
    max_error = 0.0
    total_error = 0.0
    grad_calc = 0.0
    
    # obtain a maximum error value to scale calculations
    for value in data_y:
        if (sp_target - value)**2 > max_error:
            max_error = (sp_target - value)**2
            
    # obtain a sum of all error values
    for value in data_y:
        total_error += max_error - (sp_target - value)**2
        
    # calculate a weighted set point for product turbidity based
    for i in range(len(data_x)):
            grad_calc += data_x[i]/data_y[i] * (max_error - (sp_target - data_y[i])**2)/total_error
            
    sp_calc = grad_calc * sp_target        
            
    print('For a solids target of %s the calculated set point was: %s' % (sp_target,sp_calc))        
    return (sp_calc,sp_target)