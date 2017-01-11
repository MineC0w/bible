//This file was written very late at night, don't expect to find any other green text.
var Data = [
	[ //Hif'eil
		[["הִפְעַּלְׁתִּי"],["הִפְעַּלְׁתָּ"],["הִפְעַּלְׁתְּ"],["הִפְעִּילׁ"],["הִפְעִּילָׁה"],["הִפְעַּלְנוּ"],["הִפְעַּלְׁתֶּם"],["הִפְעַּלְׁתֶּן"],["הִפְעִּילוּ"],["הִפְעִּילוּ"]], //Past
		[["מַפְעִּיל"],["מַפְעִּילׁ"],["מַפְעִּילָׁה"],["מַפְעִּילׁ"],["מַפְעִּילָׁה"],["מַפְעִּילִׁים"],["מַפְעִּילִׁים"],["מַפְעִּילׁוֹת"],["מַפְעִּילִׁים"],["מַפְעִּילׁוֹת"]], //Present
		[["אַפְעִּילׁ"],["תַּפְעִּילׁ"],["תַּפְעִּילִׁי"],["יַפְעִּילׁ"],["תַּפְעִּיל"],["נַפְעִּילׁ"],["תַּפְעִּילׁוּ"],["תַּפְעֵּלְׁנָה"],["יַפְעִּילׁוּ"],["תַּפְעֵּלְׁנָה"]] //Future
	],
	[ //Hof'al
		[["הֻפְעַּלְׁתִּי"],["הֻפְעַּלְׁתָּ"],["הֻפְעַּלְׁתְּ"],["הֻפְעַּלׁ"],["הֻפְעְּלָׁה"],["הֻפְעַּלְנוּ"],["הֻפְעַּלְׁתֶם"],["הֻפְעַּלְׁתֶן"],["הֻפְעְּלׁוּ"],["הֻפְעְּלׁוּ"]],
		[["מֻפְעָּל"],["מֻפְעָּל"],["מֻפְעֶּלֶׁת"],["מֻפְעָּל"],["מֻפְעֶּלֶׁת"],["מֻפְעָּלִׁים"],["מֻפְעָּלִׁים"],["מֻפְעָּלׁוֹת"],["מֻפְעָּלִׁים"],["מֻפְעָּלׁוֹת"]],
		[["אֻפְעַּלׁ"],["תֻּפְעַּלׁ"],["תֻּפְעְּלִׁי"],["יֻפְעַּלׁ"],["תֻּפְעַּלׁ"],["נֻפְעַּלׁ"],["תֻּפְעְּלוּ"],["תֻּפְעַּלְׁנַה"],["יֻפְעְּלׁוּ"],["תֻּפְעַּלְׁנַה"]],
		[[""],[""],[""],[""],[""],[""],[""],[""],[""],[""]]
	],
	[ //Nif'al
		[["נִפְעַלְתִּי"],["נִפְעַלְתָ"],["נִפְעַלְת"],["נִפְעַל"],["נִפְעְלָה"],["נִפְעַלְנוּ"],["נִפְעַלְתֶּם"],["נִפְעַלְתֶּן"],["נִפְעְלוּ"],["נִפְעְלוּ"]],
		[["נִפְעָל"],["נִפְעָל"],["נִפְעֶלֶת"],["נִפְעָל"],["נִפְעֶלֶת"],["נִפְעָלִים"],["נִפְעָלִים"],["נִפְעָלוֹת"],["נִפְעָלִים"],["נִפְעָלוֹת"]],
		[["אֶפָּעֵל"],["תִּפָּעֵל"],["תִּפָּעְלִּי"],["יִפָּעֵל"],["תִּפָּעֵל"],["נִפָּעֵל"],["תִּפָּעְלּוּ"],["תִּפָּעֶלְנָה"],["יִפָּעְלּוּ"],["תִּפָּעֶלְנָה"]],
		[[""],[""],[""],[""],[""],[""],[""],[""],[""],[""]]
	],
	/*[
		[[""],[""],[""],[""],[""],[""],[""],[""],[""],[""]],
		[[""],[""],[""],[""],[""],[""],[""],[""],[""],[""]],
		[[""],[""],[""],[""],[""],[""],[""],[""],[""],[""]],
		[[""],[""],[""],[""],[""],[""],[""],[""],[""],[""]]
	],*/
	[
		[["פִעַּלְתִּי"],["פִעַּלְתָּ"],["פִעַּלְתְּ"],["פִעֵּל"],["פִעְּלָה"],["פִעַּלְנוּ"],["פִעַּלְתֶּם"],["פִעַּלְתֶּן"],["פִעְּלוּ"],["פִעְּלוּ"]],
		[["מְפַעֵּל"],["מְפַעֵּל"],["מְפַעֶּלֶת"],["מְפַעֵּל"],["מְפַעֶּלֶת"],["מְפַעְּלִים"],["מְפַעְּלִים"],["מְפַעְּלוֹת"],["מְפַעְּלִים"],["מְפַעְּלוֹת"]],
		[["אֲפַעֵּל"],["תְּפַעֵּל"],["תְּפַעְּלִי"],["יְפַעֵּל"],["תְּפַעֵּל"],["נְפַעֵּל"],["תְּפַעְּלוּ"],["תְּפַעֵּלְנָה"],["יְפַעְּלוּ"],["תְּפַעֵּלְנָה"]],
		[[""],[""],[""],[""],[""],[""],[""],[""],[""],[""]]
	],
	[
		[["פֻעַּלְתִּי"],["פֻעַּלְתָּ"],["פֻעַּלְתְּ"],["פֻעַּל"],["פֻעְּלַה"],["פֻעַּלְנוּ"],["פֻעַּלְתֶּם"],["פֻעַּלְתֶּן"],["פֻעְּלוּ"],["פֻעְּלוּ"]],
		[["מְפֻעָּל"],["מְפֻעָּל"],["מְפֻעֶּלֶת"],["מְפֻעָּל"],["מְפֻעֶּלֶת"],["מְפֻעָּלִים"],["מְפֻעָּלִים"],["מְפֻעָּלוֹת"],["מְפֻעָּלִים"],["מְפֻעָּלוֹת"]],
		[["אֲפֻעַּל"],["תְּפֻעַּל"],["תְּפֻעְּלִי"],["יְפֻעַּל"],["תְּפֻעַּל"],["נְפֻעַּל"],["תְּפֻעְּלוּ"],["תְּפֻעַּלְנָה"],["יְפֻעְּלוּ"],["תְּפֻעַּלְנָה"]],
		[[""],[""],[""],[""],[""],[""],[""],[""],[""],[""]]
	],
	[
		[["הִתְפַעַּלְתִּי"],["הִתְפַעַּלְתָּ"],["הִתְפַעַּלְתְּ"],["הִתְפַעֵּל"],["הִתְפַעְּלָה"],["הִתְפַעַּלְנוּ"],["הִתְפַעַּלְתֶּם"],["הִתְפַעַּלְתֶּן"],["הִתְפַעְּלוּ"],["הִתְפַעְּלוּ"]],
		[["מִתְפַעֵּל"],["מִתְפַעֵּל"],["מִתְפַעֶּלֶת"],["מִתְפַעֵּל"],["מִתְפַעֶּלֶת"],["מִתְפַעְּלִים"],["מִתְפַעְּלִים"],["מִתְפַעְּלוֹת"],["מִתְפַעְּלִים"],["מִתְפַעְּלוֹת"]],
		[["אֶתְפַעֵּל"],["תִּתְפַעֵּל"],["תִּתְפַעְּלִי"],["יִתְפַעֵּל"],["תִּתְפַעֵּל"],["נִתְפַעֵּל"],["תתפעלו"],["תִּתְפַעֵּלְנָה"],["יִתְפַעְּלוּ"],["תִּתְפַעֵּלְנָה"]],
		[[""],[""],[""],[""],[""],[""],[""],[""],[""],[""]]
	],
];

var Molds = [
	/*function() {
		this.Question = "DEBUG ERROR";
		this.CorrectAnswer = "";
		this.FakeAnswer1 = "";
		this.FakeAnswer2 = "";
		this.FakeAnswer3 = "";
	
		this.Parameters = {
		
		}
	},
	*/
	function() {
		this.Question = "מה הגוף של הפועל |V|?";
		this.CorrectAnswer = "|Ca|";
		this.FakeAnswer1 = "|Fa1|";
		this.FakeAnswer2 = "|Fa2|";
		this.FakeAnswer3 = "|Fa3|";
	
		this.Parameters = {};
		
		this.Parameters["|Vsrc|"] = Verb("r","r","r","r");
		this.Parameters["|V|"] = this.Parameters["|Vsrc|"].Value;
		
		this.Parameters["|Ca|"] = Bodies[this.Parameters["|Vsrc|"].Body].Name;
		this.Parameters["|Fa1|"] = Bodies[Verb("r","r","r","r").Body].Name;
		this.Parameters["|Fa2|"] = Bodies[Verb("r","r","r","r").Body].Name;
		this.Parameters["|Fa3|"] = Bodies[this.Parameters["|Vsrc|"].Building].Name;
	},
	
	function() {
		this.Question = "מה הניתוח הנכון לפועל |V|?";
		this.CorrectAnswer = "|Vroot|, |Vbld|, |Vtense|, |Vbody|";
		this.FakeAnswer1 = "|Vroot|, |Vbld|, |Vtense|, |Vbody2|";
		this.FakeAnswer2 = "|Vroot|, |Vbld|, |Vtense2|, |Vbody|";
		this.FakeAnswer3 = "|Vroot|, |Vbld2|, |Vtense|, |Vbody|";
	
		this.Parameters = {}
		
		this.Parameters["|Vsrc|"] = Verb("r","r","r","r");
		this.Parameters["|V|"] = this.Parameters["|Vsrc|"].Value;
		
		this.Parameters["|Vroot|"] = Roots[this.Parameters["|Vsrc|"].Root].Root;
		this.Parameters["|Vbld|"] = Buildings[this.Parameters["|Vsrc|"].Building];
		this.Parameters["|Vtense|"] = Tenses[this.Parameters["|Vsrc|"].Tense];
		this.Parameters["|Vbody|"] = Bodies[this.Parameters["|Vsrc|"].Body].Name;
		
		this.Parameters["|Vbld2|"] = Buildings[(this.Parameters["|Vsrc|"].Building+1)%Buildings.length];
		this.Parameters["|Vtense2|"] = Tenses[(this.Parameters["|Vsrc|"].Tense+1)%Tenses.length];
		this.Parameters["|Vbody2|"] = Bodies[(this.Parameters["|Vsrc|"].Body+1)%Bodies.length].Name;
		
		
	},
	function() {
		this.Question = "מה הצורה הנכונה של הפועל |V| בזמן |T|?";
		this.CorrectAnswer = "|VT|";
		this.FakeAnswer1 = "|VT1|";
		this.FakeAnswer2 = "|VT2|";
		this.FakeAnswer3 = "|VT3|";
	
		this.Parameters = {}
		
		this.Parameters["|Vsrc|"] = Verb("r","r","r","r");
		this.Parameters["|V|"] = this.Parameters["|Vsrc|"].Value;
		this.Parameters["|T|"] = Tenses[(this.Parameters["|Vsrc|"].Tense+1)%3];
		
		this.Parameters["|VT|"] = Verb(this.Parameters["|Vsrc|"].Root, this.Parameters["|Vsrc|"].Building, (this.Parameters["|Vsrc|"].Tense+1)%3, this.Parameters["|Vsrc|"].Body).Value;
		this.Parameters["|VT1|"] = Verb(this.Parameters["|Vsrc|"].Root, this.Parameters["|Vsrc|"].Building, (this.Parameters["|Vsrc|"].Tense+2)%3, this.Parameters["|Vsrc|"].Body).Value;
		this.Parameters["|VT2|"] = Verb(this.Parameters["|Vsrc|"].Root, (this.Parameters["|Vsrc|"].Building+1)%6, (this.Parameters["|Vsrc|"].Tense+1)%3, this.Parameters["|Vsrc|"].Body).Value;
		this.Parameters["|VT3|"] = Verb(this.Parameters["|Vsrc|"].Root, this.Parameters["|Vsrc|"].Building, (this.Parameters["|Vsrc|"].Tense+1)%3, "r").Value;
	},
];

function CreateQuestion(Mold) {
	
	var Question = {Question:"", Answers:[], CorrectAnswer:""};
	
	Question.Question = Mold.Question;
	for(var i in Mold.Parameters) {
		Question.Question = Question.Question.replace(i,Mold.Parameters[i]);
	}
	//Right answer
	var key = Math.floor((Math.random() * 3) + 1);
	Question.CorrectAnswer = key;
	Question.Answers[key] = Mold.CorrectAnswer;
	for(var i in Mold.Parameters) {
		Question.Answers[key] = Question.Answers[key].replace(i,Mold.Parameters[i]);
	}
	
	//Other answers
	var newKey = (key+1)%4;
	Question.Answers[newKey] = Mold.FakeAnswer1;
	for(var i in Mold.Parameters) {
		Question.Answers[newKey] = Question.Answers[newKey].replace(i,Mold.Parameters[i]);
	}
	
	newKey = (key+2)%4;
	Question.Answers[newKey] = Mold.FakeAnswer2;
	for(var i in Mold.Parameters) {
		Question.Answers[newKey] = Question.Answers[newKey].replace(i,Mold.Parameters[i]);
	}
	
	newKey = (key+3)%4;
	Question.Answers[newKey] = Mold.FakeAnswer3;
	for(var i in Mold.Parameters) {
		Question.Answers[newKey] = Question.Answers[newKey].replace(i,Mold.Parameters[i]);
	}
	
	return Question;
}

/* WALL OF TEXT - Verb generation */
/* -------------------------------------------------------------------------------------------- */

function Verb(root, building, tense, body) {
	
	//Make sure everything is set right
	var currentRoot = root;
	var currentBuilding = building;
	var currentTense = tense;
	var currentBody = body;
	
	if(root == "r") {
		currentRoot = Math.floor(Math.random() * Roots.length-1);
	}
	
	if(building == "r") {
		currentBuilding = Math.floor(Math.random() * Buildings.length-1);
	}
	
	if(tense == "r") {
		currentTense = Math.floor(Math.random() * Tenses.length-1);
	}
	
	if(body == "r") {
		currentBody = Math.floor(Math.random() * Bodies.length-1);
	}
	
	//Make sure building is valid
	var isValid = false;
	var lastBuilding = currentBuilding;
	while(!isValid) {
		var lastBuilding = currentBuilding;
		for(var i in Roots[currentRoot].ForbiddenBuildings) {
			if(currentBuilding == Roots[currentRoot].ForbiddenBuildings[i]) {
				currentBuilding++;
			}
		}
		if(currentBuilding == lastBuilding) {
			isValid = true;
		}
	}
	
	//Generate the actual verb
	var GeneratedVerb = "";
	
	//Set building
	GeneratedVerb = Data[currentBuilding % 6][currentTense % 3][currentBody][0];
	
	//return GeneratedVerb;
	//Set root
	GeneratedVerb = GeneratedVerb.replace("פ",Roots[currentRoot].Root[0]);
	GeneratedVerb = GeneratedVerb.replace("ע",Roots[currentRoot].Root[1]);
	GeneratedVerb = GeneratedVerb.replace("ל",Roots[currentRoot].Root[2]);
	//GIZROT!
	
	var f = Roots[currentRoot].Root[0];
	if((f == "ש" || f == "ז" || f == "צ" || f == "ס") && currentBuilding == 6) {
		GeneratedVerb = GeneratedVerb.replace(f,"ת");
		GeneratedVerb = GeneratedVerb.replace("ת",Roots[currentRoot].Root[0]);	
	}
	
	
	return {Value:GeneratedVerb, Root:currentRoot, Building:currentBuilding, Tense:currentTense, Body:currentBody};
	
	
}

var Roots = [{"Root":"כתב", "ForbiddenBuildings":[3,4]},{"Root":"פחד", "ForbiddenBuildings":[3,4,5,2]},{"Root":"חשב", "ForbiddenBuildings":[5]},{"Root":"פקד", "ForbiddenBuildings":[5]},
{"Root":"ספר", "ForbiddenBuildings":[4,5]},{"Root":"סתר", "ForbiddenBuildings":[5,3,4]},
{"Root":"נגע", "ForbiddenBuildings":[4,5,1,0]},{"Root":"פגש", "ForbiddenBuildings":[4,5]}];
var Buildings = [
	"הִפְעִיל",
	"הֻפְעַל",
	"נִפְעַל",
	//"פָּעַל",
	"פִּעֵל",
	"פֻּעַל",
	"הִתְפַּעֵל"
	
];

var Bodies = [
	{"Name":"מדבר", "Tenses":[["","תִּי"],["",""],["א",""]]},
	{"Name":"נוכח", "Tenses":[["","תָּ"],["",""],["ת",""]]},
	{"Name":"נוכחת", "Tenses":[["","ת"],["ה",""],["ת","י"]]},
	{"Name":"נסתר", "Tenses":[["","ה"],["",""],["י",""]]},
	{"Name":"נסתרת", "Tenses":[["","וּ"],["","ה"],["ת",""]]},
	{"Name":"מדברים", "Tenses":[["","נוּ"],["","ים"],["נ",""]]},
	{"Name":"נוכחים", "Tenses":[["","ם"],["","ים"],["ת","ו"]]},
	{"Name":"נוכחות", "Tenses":[["","ן"],["","ות"],["ת","נָה"]]},
	{"Name":"נסתרים", "Tenses":[["","וּ"],["","ים"],["י","ו"]]},
	{"Name":"נסתרות", "Tenses":[["","וּ"],["","ות"],["י","נָה"]]}
];

var Tenses = [
	"עבר",
	"הווה",
	"עתיד",
	"ציווי"
];

/* --------------------------------------------------------------------------------------- */