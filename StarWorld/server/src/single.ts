
class single extends laya.cloud.ServerScriptBase implements laya.cloud.IServerScript{
    oncreated():void 
    {
        console.log("js create room");
        console.log("   name="+this.name);
        console.log("   master="+this.master);
        console.log("   fps="+this.fps);
        console.log("   duration="+this.duration);
        console.log("   usernum="+this.usernum);
    }

    onstart():void 
    {
        console.log("js Room '"+this.name+"' Start!!");
    }

    onclose():void 
    {
        console.log("js Room '"+this.name+"' Closed!!");
    }

    onuserin(userid:string, data:Object):void 
    {
        
    }

    onuserout(userid:string):void 
    {
        console.log("js Room '"+this.name+"' user logout, userid='"+userid+"'");
    }

    onuserevent(userid:string, key:string, val:string):void 
    {
        console.log("js Room '"+this.name+"' recv user '"+userid+"' event, key='"+key+"' value='"+val+"'");
    }
        
    onupdate():void{}
}
