/**
 * Nav_sectionsController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  

  sendSection: function( req, res ){
    var section = req.param('name');
    section = 'Nav_sections/'+ section;    
    res.render( section );
    //res.render("Nav_sections/" + section );


  },
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to Nav_sectionsController)
   */
  _config: {}

  
};
