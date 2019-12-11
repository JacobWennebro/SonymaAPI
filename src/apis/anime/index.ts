import HorribleSubsUpdater from './updaters/horrible-subs-updater'
import Webserver from './webserver'

export default async (port: Number) => {

    /* INITILIAZE WEBSERVER */
        Webserver(port);
    /*
    *   Updaters use cron jobs to actively
    *   update contents for the database such 
    *   as scraping data every so often from
    *   various websites.
    */
    // HorribleSubsUpdater scrapes data from HorribleSubs.info
        HorribleSubsUpdater('* 5 8 * * Sun'); // RUNS ONCE EVERY SUNDAY
    //

}
