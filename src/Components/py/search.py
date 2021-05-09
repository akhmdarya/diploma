import re

privacy_list = list()

#Check Url function
def findURL(row, url):
    privacy_list.clear()
    #url check regex
    entries=re.findall(r'((https?:\/\/|www\.)([\w.]+\/|)+[\w\-\_\=\&\.]+)', row)
    if(len(entries)!=0):
        for link in entries:
            privacy_list.append(str(link[0]))
        return privacy_list

    #if the link is only to the directory 
    elif(len(entries)==0):
        entries=re.findall(r'(\/((\S*))\/)', row)
        for link in entries:
            #full link 
            findURL(url + str(link[0]),url)
    return privacy_list