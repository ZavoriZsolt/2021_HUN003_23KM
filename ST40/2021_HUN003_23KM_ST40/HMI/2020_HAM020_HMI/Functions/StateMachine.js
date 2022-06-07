// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (TcHmi) {

    var StateMachine = function StateMachine(nState, ArrayIn, Locale) {
        var value = '';
        if (Locale == 'en-US') {
            value = nState + ' - ' + ArrayIn.find(element => element.nState == nState).sState1;
        } else if (Locale == 'hu-HU') {
            value = nState + ' - ' + ArrayIn.find(element => element.nState == nState).sState2;
        } else {
            value = Locale;
        }
        
        return value;
    };
    
    TcHmi.Functions.registerFunction('StateMachine', StateMachine);
})(TcHmi);
