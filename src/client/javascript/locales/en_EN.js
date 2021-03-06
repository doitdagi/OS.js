/*!
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2016, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */
(function() {
  // jscs:disable validateQuoteMarks
  'use strict';

  OSjs.Locales.en_EN = {
    //
    // CORE
    //

    'ERR_FILE_OPEN'             : 'Error opening file',
    'ERR_WM_NOT_RUNNING'        : 'Window manager is not running',
    'ERR_FILE_OPEN_FMT'         : 'The file \'**{0}**\' could not be opened',
    'ERR_APP_MIME_NOT_FOUND_FMT': 'Could not find any Applications with support for \'{0}\' files',
    'ERR_APP_LAUNCH_FAILED'     : 'Failed to launch Application',
    'ERR_APP_LAUNCH_FAILED_FMT' : 'An error occured while trying to launch: {0}',
    'ERR_APP_CONSTRUCT_FAILED_FMT'  : 'Application \'{0}\' construct failed: {1}',
    'ERR_APP_INIT_FAILED_FMT'       : 'Application \'{0}\' init() failed: {1}',
    'ERR_APP_RESOURCES_MISSING_FMT' : 'Application resources missing for \'{0}\' or it failed to load!',
    'ERR_APP_PRELOAD_FAILED_FMT'    : 'Application \'{0}\' preloading failed: \n{1}',
    'ERR_APP_LAUNCH_ALREADY_RUNNING_FMT'    : 'The application \'{0}\' is already launched and allows only one instance!',
    'ERR_APP_LAUNCH_MANIFEST_FAILED_FMT'    : 'Failed to launch \'{0}\'. Application manifest data not found!',
    'ERR_APP_LAUNCH_COMPABILITY_FAILED_FMT' : 'Failed to launch \'{0}\'. Your browser does not support: {1}',

    'ERR_NO_WM_RUNNING'         : 'No window manager is running',
    'ERR_CORE_INIT_FAILED'      : 'Failed to initialize OS.js',
    'ERR_CORE_INIT_FAILED_DESC' : 'An error occured while initializing OS.js',
    'ERR_CORE_INIT_NO_WM'       : 'Cannot launch OS.js: No window manager defined!',
    'ERR_CORE_INIT_WM_FAILED_FMT'   : 'Cannot launch OS.js: Failed to launch Window Manager: {0}',
    'ERR_CORE_INIT_PRELOAD_FAILED'  : 'Cannot launch OS.js: Failed to preload resources...',
    'ERR_JAVASCRIPT_EXCEPTION'      : 'JavaScript Error Report',
    'ERR_JAVACSRIPT_EXCEPTION_DESC' : 'An unexpected error occured, maybe a bug.',

    'ERR_APP_API_ERROR'           : 'Application API error',
    'ERR_APP_API_ERROR_DESC_FMT'  : 'Application {0} failed to perform operation \'{1}\'',
    'ERR_APP_MISSING_ARGUMENT_FMT': 'Missing argument: {0}',
    'ERR_APP_UNKNOWN_ERROR'       : 'Unknown error',

    'ERR_OPERATION_TIMEOUT'       : 'Operation Timeout',
    'ERR_OPERATION_TIMEOUT_FMT'   : 'Operation Timeout ({0})',

    'ERR_ARGUMENT_FMT'    : '\'{0}\' expects \'{1}\' to be a \'{2}\', \'{3}\' given',

    // Window
    'ERR_WIN_DUPLICATE_FMT' : 'You already have a Window named \'{0}\'',
    'WINDOW_MINIMIZE' : 'Minimize',
    'WINDOW_MAXIMIZE' : 'Maximize',
    'WINDOW_RESTORE'  : 'Restore',
    'WINDOW_CLOSE'    : 'Close',
    'WINDOW_ONTOP_ON' : 'Ontop (Enable)',
    'WINDOW_ONTOP_OFF': 'Ontop (Disable)',

    // Handler
    'TITLE_SIGN_OUT' : 'Sign out',
    'TITLE_SIGNED_IN_AS_FMT' : 'Signed in as: {0}',
    'ERR_LOGIN_FMT' : 'Login error: {0}',
    'ERR_LOGIN_INVALID' : 'Invalid login',

    // SESSION
    'ERR_NO_SESSION': 'No session was created by the server. Do you want to retry login?',
    'MSG_SESSION_WARNING' : 'Are you sure you want to quit OS.js? All unsaved settings and application data will be lost!',

    // Service
    'BUGREPORT_MSG' : 'Please report this if you think this is a bug.\nInclude a brief description on how the error occured, and if you can; how to replicate it',

    // API
    'SERVICENOTIFICATION_TOOLTIP' : 'Logged into external services: {0}',

    // Utils
    'ERR_UTILS_XHR_FATAL' : 'Fatal Error',
    'ERR_UTILS_XHR_FMT' : 'AJAX/XHR Error: {0}',

    //
    // DIALOGS
    //
    'DIALOG_LOGOUT_TITLE' : 'Log out (Exit)', // Actually located in session.js
    'DIALOG_LOGOUT_MSG_FMT' : 'Logging out user \'{0}\'.\nDo you want to save current session?',

    'DIALOG_CLOSE' : 'Close',
    'DIALOG_CANCEL': 'Cancel',
    'DIALOG_APPLY' : 'Apply',
    'DIALOG_OK'    : 'OK',

    'DIALOG_ALERT_TITLE' : 'Alert Dialog',

    'DIALOG_COLOR_TITLE' : 'Color Dialog',
    'DIALOG_COLOR_R' : 'Red: {0}',
    'DIALOG_COLOR_G' : 'Green: {0}',
    'DIALOG_COLOR_B' : 'Blue: {0}',
    'DIALOG_COLOR_A' : 'Alpha: {0}',

    'DIALOG_CONFIRM_TITLE' : 'Confirm Dialog',

    'DIALOG_ERROR_MESSAGE'   : 'Message',
    'DIALOG_ERROR_SUMMARY'   : 'Summary',
    'DIALOG_ERROR_TRACE'     : 'Trace',
    'DIALOG_ERROR_BUGREPORT' : 'Report Bug',

    'DIALOG_FILE_SAVE'      : 'Save',
    'DIALOG_FILE_OPEN'      : 'Open',
    'DIALOG_FILE_MKDIR'     : 'New Folder',
    'DIALOG_FILE_MKDIR_MSG' : 'Create a new directory in **{0}**',
    'DIALOG_FILE_OVERWRITE' : 'Are you sure you want to overwrite the file \'{0}\'?',
    'DIALOG_FILE_MNU_VIEWTYPE' : 'View type',
    'DIALOG_FILE_MNU_LISTVIEW' : 'List View',
    'DIALOG_FILE_MNU_TREEVIEW' : 'Tree View',
    'DIALOG_FILE_MNU_ICONVIEW' : 'Icon View',
    'DIALOG_FILE_ERROR'        : 'FileDialog Error',
    'DIALOG_FILE_ERROR_SCANDIR': 'Failed listing directory \'{0}\' because an error occured',
    'DIALOG_FILE_ERROR_FIND': 'Failed searching directory \'{0}\' because an error occured',
    'DIALOG_FILE_MISSING_FILENAME' : 'You need to select a file or enter new filename!',
    'DIALOG_FILE_MISSING_SELECTION': 'You need to select a file!',

    'DIALOG_FILEINFO_TITLE'   : 'File Information',
    'DIALOG_FILEINFO_LOADING' : 'Loading file information for: {0}',
    'DIALOG_FILEINFO_ERROR'   : 'FileInformationDialog Error',
    'DIALOG_FILEINFO_ERROR_LOOKUP'     : 'Failed to get file information for **{0}**',
    'DIALOG_FILEINFO_ERROR_LOOKUP_FMT' : 'Failed to get file information for: {0}',

    'DIALOG_INPUT_TITLE' : 'Input Dialog',

    'DIALOG_FILEPROGRESS_TITLE'   : 'File Operation Progress',
    'DIALOG_FILEPROGRESS_LOADING' : 'Loading...',

    'DIALOG_UPLOAD_TITLE'   : 'Upload Dialog',
    'DIALOG_UPLOAD_DESC'    : 'Upload file to **{0}**.<br />Maximum size: {1} bytes',
    'DIALOG_UPLOAD_MSG_FMT' : 'Uploading \'{0}\' ({1} {2}) to {3}',
    'DIALOG_UPLOAD_MSG'     : 'Uploading file...',
    'DIALOG_UPLOAD_FAILED'  : 'Upload failed',
    'DIALOG_UPLOAD_FAILED_MSG'      : 'The upload has failed',
    'DIALOG_UPLOAD_FAILED_UNKNOWN'  : 'Reason unknown...',
    'DIALOG_UPLOAD_FAILED_CANCELLED': 'Cancelled by user...',
    'DIALOG_UPLOAD_TOO_BIG': 'File is too big',
    'DIALOG_UPLOAD_TOO_BIG_FMT': 'File is too big, exceeds {0}',

    'DIALOG_FONT_TITLE' : 'Font Dialog',

    'DIALOG_APPCHOOSER_TITLE' : 'Choose Application',
    'DIALOG_APPCHOOSER_MSG'   : 'Choose an application to open',
    'DIALOG_APPCHOOSER_NO_SELECTION' : 'You need to select an application',
    'DIALOG_APPCHOOSER_SET_DEFAULT'  : 'Use as default application for {0}',

    //
    // HELPERS
    //

    // GoogleAPI
    'GAPI_DISABLED'           : 'GoogleAPI Module not configured or disabled',
    'GAPI_SIGN_OUT'           : 'Sign out from Google API Services',
    'GAPI_REVOKE'             : 'Revoke permissions and Sign Out',
    'GAPI_AUTH_FAILURE'       : 'Google API Authentication failed or did not take place',
    'GAPI_AUTH_FAILURE_FMT'   : 'Failed to authenticate: {0}:{1}',
    'GAPI_LOAD_FAILURE'       : 'Failed to load Google API',

    // Windows Live API
    'WLAPI_DISABLED'          : 'Windows Live API module not configured or disabled',
    'WLAPI_SIGN_OUT'          : 'Sign out from Window Live API',
    'WLAPI_LOAD_FAILURE'      : 'Failed to load Windows Live API',
    'WLAPI_LOGIN_FAILED'      : 'Failed to log into Windows Live API',
    'WLAPI_LOGIN_FAILED_FMT'  : 'Failed to log into Windows Live API: {0}',
    'WLAPI_INIT_FAILED_FMT'   : 'Windows Live API returned {0} status',

    // IndexedDB
    'IDB_MISSING_DBNAME' : 'Cannot create IndexedDB without Database Name',
    'IDB_NO_SUCH_ITEM'   : 'No such item',

    //
    // VFS
    //
    'ERR_VFS_FATAL'            : 'Fatal Error',
    'ERR_VFS_UNAVAILABLE'      : 'Not available',
    'ERR_VFS_FILE_ARGS'        : 'File expects at least one argument',
    'ERR_VFS_NUM_ARGS'         : 'Not enough arguments',
    'ERR_VFS_EXPECT_FILE'      : 'Expects a file-object',
    'ERR_VFS_EXPECT_SRC_FILE'  : 'Expects a source file-object',
    'ERR_VFS_EXPECT_DST_FILE'  : 'Expects a destination file-object',
    'ERR_VFS_FILE_EXISTS'      : 'Destination already exists',
    'ERR_VFS_TARGET_NOT_EXISTS': 'Target does not exist',
    'ERR_VFS_TRANSFER_FMT'     : 'An error occured while transfering between storage: {0}',
    'ERR_VFS_UPLOAD_NO_DEST'   : 'Cannot upload a file without a destination',
    'ERR_VFS_UPLOAD_NO_FILES'  : 'Cannot upload without any files defined',
    'ERR_VFS_UPLOAD_FAIL_FMT'  : 'File upload failed: {0}',
    'ERR_VFS_UPLOAD_CANCELLED' : 'File upload was cancelled',
    'ERR_VFS_DOWNLOAD_NO_FILE' : 'Cannot download a path without a path',
    'ERR_VFS_DOWNLOAD_FAILED'  : 'An error occured while downloading: {0}',
    'ERR_VFS_REMOTEREAD_EMPTY' : 'Response was empty',

    'ERR_VFSMODULE_INVALID'            : 'Invalid VFS Module',
    'ERR_VFSMODULE_INVALID_FMT'        : 'Invalid VFS Module: {0}',
    'ERR_VFSMODULE_INVALID_METHOD'     : 'Invalid VFS Method',
    'ERR_VFSMODULE_INVALID_METHOD_FMT' : 'Invalid VFS Method: {0}',
    'ERR_VFSMODULE_INVALID_TYPE'       : 'Invalid VFS Module type',
    'ERR_VFSMODULE_INVALID_TYPE_FMT'   : 'Invalid VFS Module type: {0}',
    'ERR_VFSMODULE_INVALID_CONFIG'     : 'Invalid VFS Module configuration',
    'ERR_VFSMODULE_INVALID_CONFIG_FMT' : 'Invalid VFS Module configuration: {0}',
    'ERR_VFSMODULE_ALREADY_MOUNTED'    : 'VFS Module already mounted',
    'ERR_VFSMODULE_ALREADY_MOUNTED_FMT': 'VFS Module \'{0}\' already mounted',
    'ERR_VFSMODULE_NOT_MOUNTED'        : 'VFS Module not mounted',
    'ERR_VFSMODULE_NOT_MOUNTED_FMT'    : 'VFS Module \'{0}\' not mounted',
    'ERR_VFSMODULE_EXCEPTION'          : 'VFS Module Exception',
    'ERR_VFSMODULE_EXCEPTION_FMT'      : 'VFS Module Exception: {0}',
    'ERR_VFSMODULE_NOT_FOUND_FMT'      : 'No VFS Module matches {0}. Wrong path or format ?',
    'ERR_VFSMODULE_READONLY'           : 'This VFS Module is read-only',
    'ERR_VFSMODULE_READONLY_FMT'       : 'This VFS Module is read-only: {0}',

    'TOOLTIP_VFS_DOWNLOAD_NOTIFICATION': 'Downloading file',

    'ERR_VFSMODULE_XHR_ERROR'      : 'XHR Error',
    'ERR_VFSMODULE_ROOT_ID'        : 'Failed to find root folder id',
    'ERR_VFSMODULE_NOSUCH'         : 'File does not exist',
    'ERR_VFSMODULE_PARENT'         : 'No such parent',
    'ERR_VFSMODULE_PARENT_FMT'     : 'Failed to look up parent: {0}',
    'ERR_VFSMODULE_SCANDIR'        : 'Failed to scan directory',
    'ERR_VFSMODULE_SCANDIR_FMT'    : 'Failed to scan directory: {0}',
    'ERR_VFSMODULE_READ'           : 'Failed to read file',
    'ERR_VFSMODULE_READ_FMT'       : 'Failed to read file: {0}',
    'ERR_VFSMODULE_WRITE'          : 'Failed to write file',
    'ERR_VFSMODULE_WRITE_FMT'      : 'Failed to write file: {0}',
    'ERR_VFSMODULE_COPY'           : 'Failed to copy',
    'ERR_VFSMODULE_COPY_FMT'       : 'Failed to copy: {0}',
    'ERR_VFSMODULE_UNLINK'         : 'Failed to unlink file',
    'ERR_VFSMODULE_UNLINK_FMT'     : 'Failed to unlink file: {0}',
    'ERR_VFSMODULE_MOVE'           : 'Failed to move file',
    'ERR_VFSMODULE_MOVE_FMT'       : 'Failed to move file: {0}',
    'ERR_VFSMODULE_EXIST'          : 'Failed to check file existence',
    'ERR_VFSMODULE_EXIST_FMT'      : 'Failed to check file existence: {0}',
    'ERR_VFSMODULE_FILEINFO'       : 'Failed to get file information',
    'ERR_VFSMODULE_FILEINFO_FMT'   : 'Failed to get file information: {0}',
    'ERR_VFSMODULE_MKDIR'          : 'Failed to create directory',
    'ERR_VFSMODULE_MKDIR_FMT'      : 'Failed to create directory: {0}',
    'ERR_VFSMODULE_MKFILE'         : 'Failed to create file',
    'ERR_VFSMODULE_MKFILE_FMT'     : 'Failed to create file: {0}',
    'ERR_VFSMODULE_URL'            : 'Failed to get URL for file',
    'ERR_VFSMODULE_URL_FMT'        : 'Failed to get URL for file: {0}',
    'ERR_VFSMODULE_TRASH'          : 'Failed to move file to trash',
    'ERR_VFSMODULE_TRASH_FMT'      : 'Failed to move file to trash: {0}',
    'ERR_VFSMODULE_UNTRASH'        : 'Failed to move file out of trash',
    'ERR_VFSMODULE_UNTRASH_FMT'    : 'Failed to move file out of trash: {0}',
    'ERR_VFSMODULE_EMPTYTRASH'     : 'Failed to empty trash',
    'ERR_VFSMODULE_EMPTYTRASH_FMT' : 'Failed to empty trash: {0}',
    'ERR_VFSMODULE_FIND'           : 'Failed to search',
    'ERR_VFSMODULE_FIND_FMT'       : 'Failed to search: {0}',
    'ERR_VFSMODULE_FREESPACE'      : 'Failed to get free space',
    'ERR_VFSMODULE_FREESPACE_FMT'  : 'Failed to get free space: {0}',
    'ERR_VFSMODULE_EXISTS'         : 'Failed to check if exists',
    'ERR_VFSMODULE_EXISTS_FMT'     : 'Failed to check if exists: {0}',

    // VFS -> Dropbox
    'DROPBOX_NOTIFICATION_TITLE' : 'You are signed in to Dropbox API',
    'DROPBOX_SIGN_OUT'           : 'Sign out from Google API Services',

    // VFS -> OneDrive
    'ONEDRIVE_ERR_RESOLVE'      : 'Failed to resolve path: item not found',

    // ZIP
    'ZIP_PRELOAD_FAIL'  : 'Failed to load zip.js',
    'ZIP_VENDOR_FAIL'   : 'zip.js library was not found. Did it load properly?',
    'ZIP_NO_RESOURCE'   : 'No zip resource was given',
    'ZIP_NO_PATH'       : 'No path given',

    //
    // SearchEngine
    //
    'SEARCH_LOADING': 'Searching...',
    'SEARCH_NO_RESULTS': 'No results found',

    //
    // PackageManager
    //

    'ERR_PACKAGE_EXISTS': 'Package installation directory already exists. Cannot continue!',

    //
    // DefaultApplication
    //
    'ERR_FILE_APP_OPEN'         : 'Cannot open file',
    'ERR_FILE_APP_OPEN_FMT'     : 'The file {0} could not be opened because the mime {1} is not supported',
    'ERR_FILE_APP_OPEN_ALT_FMT' : 'The file {0} could not be opened',
    'ERR_FILE_APP_SAVE_ALT_FMT' : 'The file {0} could not be saved',
    'ERR_GENERIC_APP_FMT'       : '{0} Application Error',
    'ERR_GENERIC_APP_ACTION_FMT': 'Failed to perform action \'{0}\'',
    'ERR_GENERIC_APP_UNKNOWN'   : 'Unknown Error',
    'ERR_GENERIC_APP_REQUEST'   : 'An error occured while handling your request',
    'ERR_GENERIC_APP_FATAL_FMT' : 'Fatal Error: {0}',
    'MSG_GENERIC_APP_DISCARD'   : 'Discard changes?',
    'MSG_FILE_CHANGED'          : 'The file has changed. Reload?',
    'MSG_APPLICATION_WARNING'   : 'Application Warning',
    'MSG_MIME_OVERRIDE'         : 'The filetype "{0}" is not supported, using "{1}" instead.',

    //
    // General
    //

    'LBL_UNKNOWN'      : 'Unknown',
    'LBL_APPEARANCE'   : 'Appearance',
    'LBL_USER'         : 'User',
    'LBL_NAME'         : 'Name',
    'LBL_APPLY'        : 'Apply',
    'LBL_FILENAME'     : 'Filename',
    'LBL_PATH'         : 'Path',
    'LBL_SIZE'         : 'Size',
    'LBL_TYPE'         : 'Type',
    'LBL_MIME'         : 'MIME',
    'LBL_LOADING'      : 'Loading',
    'LBL_SETTINGS'     : 'Settings',
    'LBL_ADD_FILE'     : 'Add file',
    'LBL_COMMENT'      : 'Comment',
    'LBL_ACCOUNT'      : 'Account',
    'LBL_CONNECT'      : 'Connect',
    'LBL_ONLINE'       : 'Online',
    'LBL_OFFLINE'      : 'Offline',
    'LBL_AWAY'         : 'Away',
    'LBL_BUSY'         : 'Busy',
    'LBL_CHAT'         : 'Chat',
    'LBL_HELP'         : 'Help',
    'LBL_ABOUT'        : 'About',
    'LBL_PANELS'       : 'Panels',
    'LBL_LOCALES'      : 'Locales',
    'LBL_THEME'        : 'Theme',
    'LBL_COLOR'        : 'Color',
    'LBL_PID'          : 'PID',
    'LBL_KILL'         : 'Kill',
    'LBL_ALIVE'        : 'Alive',
    'LBL_INDEX'        : 'Index',
    'LBL_ADD'          : 'Add',
    'LBL_FONT'         : 'Font',
    'LBL_YES'          : 'Yes',
    'LBL_NO'           : 'No',
    'LBL_CANCEL'       : 'Cancel',
    'LBL_TOP'          : 'Top',
    'LBL_LEFT'         : 'Left',
    'LBL_RIGHT'        : 'Right',
    'LBL_BOTTOM'       : 'Bottom',
    'LBL_CENTER'       : 'Center',
    'LBL_FILE'         : 'File',
    'LBL_NEW'          : 'New',
    'LBL_OPEN'         : 'Open',
    'LBL_SAVE'         : 'Save',
    'LBL_SAVEAS'       : 'Save as...',
    'LBL_CLOSE'        : 'Close',
    'LBL_MKDIR'        : 'Create directory',
    'LBL_UPLOAD'       : 'Upload',
    'LBL_VIEW'         : 'View',
    'LBL_EDIT'         : 'Edit',
    'LBL_RENAME'       : 'Rename',
    'LBL_DELETE'       : 'Delete',
    'LBL_OPENWITH'     : 'Open With ...',
    'LBL_ICONVIEW'     : 'Icon View',
    'LBL_TREEVIEW'     : 'Tree View',
    'LBL_LISTVIEW'     : 'List View',
    'LBL_REFRESH'      : 'Refresh',
    'LBL_VIEWTYPE'     : 'View type',
    'LBL_BOLD'         : 'Bold',
    'LBL_ITALIC'       : 'Italic',
    'LBL_UNDERLINE'    : 'Underline',
    'LBL_REGULAR'      : 'Regular',
    'LBL_STRIKE'       : 'Strike',
    'LBL_INDENT'       : 'Indent',
    'LBL_OUTDENT'      : 'Outdate',
    'LBL_UNDO'         : 'Undo',
    'LBL_REDO'         : 'Redo',
    'LBL_CUT'          : 'Cut',
    'LBL_UNLINK'       : 'Unlink',
    'LBL_COPY'         : 'Copy',
    'LBL_PASTE'        : 'Paste',
    'LBL_INSERT'       : 'Insert',
    'LBL_IMAGE'        : 'Image',
    'LBL_LINK'         : 'Link',
    'LBL_DISCONNECT'    : 'Disconnect',
    'LBL_APPLICATIONS'  : 'Applications',
    'LBL_ADD_FOLDER'    : 'Add folder',
    'LBL_INFORMATION'   : 'Information',
    'LBL_TEXT_COLOR'    : 'Text Color',
    'LBL_BACK_COLOR'    : 'Back Color',
    'LBL_RESET_DEFAULT' : 'Reset to defaults',
    'LBL_DOWNLOAD_COMP' : 'Download to computer',
    'LBL_ORDERED_LIST'  : 'Ordered List',
    'LBL_BACKGROUND_IMAGE' : 'Background Image',
    'LBL_BACKGROUND_COLOR' : 'Background Color',
    'LBL_UNORDERED_LIST'   : 'Unordered List',
    'LBL_STATUS'   : 'Status',
    'LBL_READONLY' : 'Read-Only',
    'LBL_CREATED' : 'Created',
    'LBL_MODIFIED' : 'Modified',
    'LBL_SHOW_COLUMNS' : 'Show Columns',
    'LBL_MOVE' : 'Move',
    'LBL_OPTIONS' : 'Options',
    'LBL_OK' : 'OK',
    'LBL_DIRECTORY' : 'Directory',
    'LBL_CREATE' : 'Create',
    'LBL_BUGREPORT' : 'Bugreport',
    'LBL_INSTALL' : 'Install',
    'LBL_UPDATE' : 'Update',
    'LBL_REMOVE' : 'Remove',
    'LBL_SHOW_SIDEBAR' : 'Show sidebar',
    'LBL_SHOW_NAVIGATION' : 'Show navigation',
    'LBL_SHOW_HIDDENFILES' : 'Show hidden files',
    'LBL_SHOW_FILEEXTENSIONS' : 'Show file extensions',
    'LBL_MOUNT': 'Mount',
    'LBL_DESCRIPTION': 'Description',
    'LBL_USERNAME': 'Username',
    'LBL_PASSWORD': 'Password',
    'LBL_HOST': 'Host',
    'LBL_NAMESPACE': 'Namespace',
    'LBL_SEARCH': 'Search'

  };

})();
