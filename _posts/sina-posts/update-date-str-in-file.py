
import re

import os

from tempfile import mkstemp
from shutil import move, copymode
from os import fdopen, remove





def replace(file_path, pattern, subst):
    #Create temp file
    fh, abs_path = mkstemp()
    with fdopen(fh,'w') as new_file:
        with open(file_path) as old_file:
            lines = old_file.readlines()  # 读取所有行
            title_line = lines[1]  # 取第一行
            date_line = lines[2]  # 取第四行
            todo_index = date_line.find('to_do_item')
            print("todo_index: ", todo_index )
            
            if todo_index != -1: 
                date_str = title_line[7:17]
                subst="date: " + date_line
                for line in old_file:
                    new_file.write(line.replace(pattern, subst))
    #Copy the file permissions from the old file to the new file
    # copymode(file_path, abs_path)
    # #Remove original file
    # remove(file_path)
    # #Move new file
    # move(abs_path, file_path)




rootdir = './demo/'   # 需要遍历的文件夹，这里设定为当前文件夹
list = os.listdir(rootdir)
for line in list:
    filepath = os.path.join(rootdir, line)
    if os.path.isdir(filepath):
        print("dir:" + filepath)
    if os.path.isfile(filepath):
        print("file:" + filepath)
        pattern = "date:  to_do_item"
        subst=""
        replace(filepath, pattern, subst)

        


# rootdir = './demo/'   # 需要遍历的文件夹，这里设定为当前文件夹
# list = os.listdir(rootdir)
# for line in list:
#     filepath = os.path.join(rootdir, line)
#     if os.path.isdir(filepath):
#         print("dir:" + filepath)
#     if os.path.isfile(filepath):
#         print("file:" + filepath)
#         src = filepath
#         fname = filepath
#         with open(fname, 'r', encoding='utf-8') as f:  # 打开文件
#             lines = f.readlines()  # 读取所有行
#             title_line = lines[1]  # 取第一行
#             third_line = lines[2]  # 取第四行

#             no_date_index = third_line.find('to_do_item')
#             #  原文发布于：*3C//DTD XHTML 1.0
#             print("no_date_index: ", no_date_index )
            
#             if no_date_index != -1: 
#                 date_str = title_line[7:17]
#                 print('data_str: ', date_str)
#                 line[2]='date: ' + date_str
#                 f.write(line[2].replace())

               



