//define router class

var MapRouter = Backbone.Router.extend ({
	  routes: {
	  	         "pcthchild" : "showPcthchild",
	  	         "pct_finance" : "showPct_finance",
	  	         "pctind_professional" : "showPct_professional",
	  	         "pctocc_profmanage" : "showPctocc_profmanage",
	  	         "pctcollege" : "showPctcollege",
	  	         "pctinc_0_25k" : "showPctinc_0_25k",
	  	         "pctinc_25k_50k" : "showPctinc_25k_50k",
	  	         "pctinc_50k_100k" : "showPctinc_50k_100k",
	  	         "pctinc_100k_more" : "showPctinc_100k_more",
	  	         "medhhincome" : "showMedhhincome",
	  	         "pctpoverty" : "showPctpoverty",
	  	         "pctpublicassist" : "showPctpublicassist",
	  	         "units" : "showUnits",
	  	         "pctown" : "showPctown",
	  	         "pctrent" : "showPctrent",
	  	         "pctvacant" : "showPctvacant",
	  	         "medianvalue" : "showMedianvalue",
	  	         "medianrent" : "showMedianrent",
	  	         "pctincomerent_30_more" : "showPctincomerent_30_more",
	  	         "medianpctincomerent" : "showMedianpctincomerent",
	  	         "pctinc_mortgage_30_more" : "showPctinc_mortgage_30_more",
	  	         "pctsameres" : "showPctsameres",
	  	         "pctind_info" : "showPctind_info",
	  	         "pctunits_newres_2000" : "showPctunits_newres_2000",
	  	         "pctunits_newres" : "showPctunits_newres",

	  },

	  showPcthchild: function(){
	  	alert("percent kids");

	  },

	  showPct_finance: function(){

	  },

	  showPct_professional: function(){

	  },

	  showPctocc_profmanage: function(){

	  },

	  showPctcollege: function(){

	  },

	  showPctinc_0_25k: function(){

	  },

	  showPctinc_25k_50k: function(){

	  },

	  showPctinc_50k_100k: function(){

	  },

	  showPctinc_100k_more: function(){

	  },

	  showMedhhincome: function(){

	  },

	  showPctpoverty: function(){

	  },

	  showPctpublicassist: function(){

	  },

	  showUnits: function(){

	  },

	  showPctown: function(){

	  },

	  showPctrent: function(){

	  },

	  showPctvacant: function(){

	  },

	  showMedianvalue: function() {

	  },

	  showMedianrent: function(){

	  },

	  showPctincomerent_30_more: function(){

	  },

	  showPctinc_mortgage_30_more: function(){

	  },

	  showPctsameres: function(){

	  },

	  showPctind_info: function(){

	  },

	  showPctunits_newres: function(){

	  },

	  showPctunits_newres_2000: function(){

	  },


});

var appRouter = new MapRouter();

Backbone.history.start();