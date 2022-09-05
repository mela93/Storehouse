#!/usr/bin/python
# -*- coding: UTF-8 -*-

import os
import re
import typing
import pathlib
import shutil

from pathlib import Path


def main():
    source_folder = './'
    comic_list = comic_lists(source_folder)

    for comic_path in comic_list:
        create_data_and_move(comic_path)
        # comic_list = comic_list(folder_path)
    # path = os.path.join(success_folder, path_name)
    # if not os.path.exists(path):
    #     os.makedirs(path)

    # return os.path.normpath(path)


def comic_lists(source_folder) -> typing.List[str]:
    total = []
    source = Path(source_folder).resolve()
    print(source)
    escape_folder_set = set(re.split("[,，]",'files,file_output,failed'))
    for full_name in source.glob(r'**/*'):
        if set(full_name.parent.parts) & escape_folder_set:
            continue
        absf = str(full_name)
        zip_file = full_name.with_suffix('.zip')
        if zip_file.is_file():
            total.append(absf)
    return total

def create_data_and_move(comic_path):
    n_auther = get_auther(os.path.basename(comic_path))
    comic_path = os.path.abspath(comic_path)
    core_main(comic_path, n_auther)


def get_auther(file_path: str) -> str:
    n_auther = re.findall(r'\[([^\[\]]*)\]', file_path)
    if n_auther.__len__() > 0:
        folder_name = '[' + n_auther[0] + ']'
        return folder_name
    else:
        return 'unknown'


def core_main(comic_path, n_auther):
    if n_auther == 'unknown':
        moveFailedFolder(comic_path)
        return
    path = create_folder(comic_path, n_auther)
    paste_file_to_folder(comic_path, path)
    pass

def create_folder(comic_path, n_auther):
    success_folder = 'file_output'
    path = os.path.join(success_folder, n_auther)
    if not os.path.exists(path):
        try:
            os.makedirs(path)
        except:
            print(f"[-]Fatal error! Can not make folder '{path}'")
            os._exit(0)

    return os.path.normpath(path)

def paste_file_to_folder(comic_path, path):
    try:
        shutil.move(comic_path, path)
    except:
        print(f'[-]FileMoveError! Can not move file {comic_path} to {path}')
        return

def moveFailedFolder(comic_path):
    failed_folder = 'failed'
    try:
        shutil.move(comic_path, failed_folder)
    except:
        print(f'[-]FileMoveError! Can not move file {comic_path} to {failed_folder}')
        return

main()