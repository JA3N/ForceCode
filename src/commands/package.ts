import * as vscode from 'vscode';
// import fs = require('fs-extra');
// import * as path from 'path';
import * as error from './../util/error';

// var generator: any = require('package-xml/js/packageXmlGenerator');

export default function generate(context: vscode.ExtensionContext) {
    vscode.window.forceCode.statusBarItem.text = 'ForceCode: Package-xml';
    vscode.window.forceCode.outputChannel.clear();
    return vscode.window.forceCode.connect(context)
        // .then(svc => generator({}))
        .then(finished)
        .catch(onError);
    // =======================================================================================================================================
    // =======================================================================================================================================

    // =======================================================================================================================================
    function finished(res): boolean {
        vscode.window.forceCode.resetMenu();
        return res;
    }
    function onError(err) {
        vscode.window.forceCode.statusBarItem.text = 'ForceCode: Deploy Errors $(thumbsdown)';
        vscode.window.forceCode.resetMenu();
        return error.outputError(err, vscode.window.forceCode.outputChannel);
    }
    // =======================================================================================================================================
}



