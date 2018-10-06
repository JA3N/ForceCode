import * as vscode from 'vscode';
import * as ForceCode from '../forceCode';

export function outputError(error: ForceCode.ForceCodeError, outputChannel: vscode.OutputChannel) {
    vscode.window.forceCode.statusBarItem.text = 'ForceCode: ' + error.message;
    vscode.window.forceCode.resetMenu();
    outputChannel.appendLine('================================     ERROR     ================================\n');
    outputChannel.appendLine(error.message);
    console.error(error);
    return false;
};
