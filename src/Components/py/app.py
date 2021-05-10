from flask import Flask
from markupsafe import escape

app = Flask(__name__)

@app.route("/parse/<username>")
def index(username):
    # f = open("url\\.txt", "r")
    # n = f.readline(1)
    # return n
    return 'User %s' % escape(username)


# from words import wordlist
# from search import findURL
# from virustotal import AntiVirus

# import json
# import sys
# import ospy
# import requests
# import re
# from bs4 import BeautifulSoup



# array = [['Banner','False'],['Privacy_link','False']]


# #div-banner list
# data_div_list = list()

# #url-privacy list
# data_url_list = list()

# #privacy-link list
# privacy_list = list()
# data_privacy_list = list()
# dataJson = '{ "Banner":"False", "Privacy_link":"null", "Article_6 ( Lawfulness of processing)":"False", "Contact":"False", "Period":"False", "Third_parties":"False", "Result": "null"}' 
# x = json.loads(dataJson)
# symbol = '.;'

# #Sort list function
# def sort_list(seq):
#     seen = set()
#     seen_add = seen.add
#     return [x for x in seq if not (x in seen or seen_add(x))]


# #Main fucnction
# def main(url):
    
#     privacy_link = ''
    
#     #create wordlist
#     data_div_list.extend(wordlist("db\\div_db\\div_db.txt"))
#     data_url_list.extend(wordlist("db\\link_db\\link_db.txt"))
#     # print("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii: " + url)
#     #url request
#     response = requests.get(url)

#     #html parser
#     soup = BeautifulSoup(response.text, 'html.parser')
#     #print("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii: " + url)
#     #link parser
#     mylinks = soup.find_all('a')
#     #div parser
#     mydivs = soup.find_all('div')

#     #output div-banner
#     for banner in mydivs:
#         for div in data_div_list:
#             if(str(banner).find(div)>0):
#                 array[0][1]='True'


#     #privacy link cheker
#     for link in mylinks:
#         for line in data_url_list:
#             link_ = str(link).replace('https',' ').replace('/',' ')
#             if(link_.find(line)>0):
#                 privacy_list.extend(findURL(str(link), url))
    
    
#     #request privacy_link
#     if(len(privacy_list)!=0):
#         #list sort
#         data_privacy_list.extend(sort_list(privacy_list))
#         for line in data_privacy_list:
#             array[1][1] = 'True'
#         for line in data_url_list:
#             for link_ in privacy_list:
#                 if(link_.find(line)>0):
#                     privacy_link = str(link_).replace('\n','')
#                     break
#             if(breakpoint):
#                 break
        
#     #print('URL: ' + url + '\n')
   
#     x["Banner"]=array[0][1]
#     x["Privacy_link"]=privacy_link
#     #print("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii: " + url)
#     return x
#     karina(privacy_link)
# #----------------------------------------------------------------

# #----------------------------------------------------------------
# def karina(privacy_link):
    
#     #url request
#     response = requests.get(privacy_link)
#     soup = BeautifulSoup(response.text, 'html.parser')
#     my_ul_li = soup.find_all('ul')

#     files = next(os.walk('db\\text_db'))[2]  
#     dir = 'db\\text_db\\'
#     for f in files:
#         count=0
#         dataDB = wordlist(dir+f)
#         f=f.replace('.txt','')

#         for p in my_ul_li:
#             count=0
#             for data in dataDB:
#                 if(str(p).find(data)>0):
#                     count=count+1

#             if(count>=(len(dataDB)/3)):
#                 x[f]='True'
#                 break
#         if(count<(len(dataDB)/3)): 
#             x[f]='False'
#     print(x)
    
    

    
# url=''



# #main(url)
# #AntiVirus(url)
# #karina(url)
# url='http://'+sys.argv[1]
# # async def ch(url):
# print(main(url))

# print("nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee: " + url)

# # print(dataJson)
# # sys.stdout.flush()
# # if(len(sys.argv)<=0):
# #     url='http://'+sys.argv[1]
# #     main(url)
# #     print("name: " + sys.argv[1])
# #     print('python main.py -url  https://www.netflix.com/kz/ -banner -virus')

# # else:
    
# #         # if(sys.argv[i]=='-url'):
# #         # sys.argv[3]=='-url'
# #         # sys.argv[4]=='-url'
# #     url='http://'+sys.argv[1]
# #         # if(sys.argv[i]=='-virus'):
# #         #     x["Result"] = AntiVirus(url)
# #         # if(sys.argv[i]=='-banner'):
# #     main(url)
        


        
            
    
    

        
            
    

