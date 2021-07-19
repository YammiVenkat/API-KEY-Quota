var verb = context.getVariable(request.verb);
context.setVariable("messageWeight", "1");
 if (verb == "POST"){
     context.setVariable("messageWeight", "2");
 }