import * as address from "./address";
import * as answer from "./answer";
import * as cache from "./cache";
import * as crypto from "./crypto";
import * as currency from "./currency";
import * as db from "./db";
import * as email from "./email";
import * as emoji from "./emoji";
import * as evchargers from "./evchargers";
import * as file from "./file";
import * as forex from "./forex";
import * as fx from "./function";
import * as geocoding from "./geocoding";
import * as gifs from "./gifs";
import * as google from "./google";
import * as helloworld from "./helloworld";
import * as holidays from "./holidays";
import * as id from "./id";
import * as image from "./image";
import * as ip from "./ip";
import * as location from "./location";
import * as notes from "./notes";
import * as otp from "./otp";
import * as postcode from "./postcode";
import * as prayer from "./prayer";
import * as qr from "./qr";
import * as quran from "./quran";
import * as routing from "./routing";
import * as rss from "./rss";
import * as sentiment from "./sentiment";
import * as sms from "./sms";
import * as stock from "./stock";
import * as stream from "./stream";
import * as sunnah from "./sunnah";
import * as thumbnail from "./thumbnail";
import * as time from "./time";
import * as twitter from "./twitter";
import * as url from "./url";
import * as user from "./user";
import * as vehicle from "./vehicle";
import * as weather from "./weather";
import * as youtube from "./youtube";

export class Client {
  constructor(token: string) {
    this.addressService = new address.AddressService(token);
    this.answerService = new answer.AnswerService(token);
    this.cacheService = new cache.CacheService(token);
    this.cryptoService = new crypto.CryptoService(token);
    this.currencyService = new currency.CurrencyService(token);
    this.dbService = new db.DbService(token);
    this.emailService = new email.EmailService(token);
    this.emojiService = new emoji.EmojiService(token);
    this.evchargersService = new evchargers.EvchargersService(token);
    this.fileService = new file.FileService(token);
    this.forexService = new forex.ForexService(token);
    this.functionService = new fx.FunctionService(token);
    this.geocodingService = new geocoding.GeocodingService(token);
    this.gifsService = new gifs.GifsService(token);
    this.googleService = new google.GoogleService(token);
    this.helloworldService = new helloworld.HelloworldService(token);
    this.holidaysService = new holidays.HolidaysService(token);
    this.idService = new id.IdService(token);
    this.imageService = new image.ImageService(token);
    this.ipService = new ip.IpService(token);
    this.locationService = new location.LocationService(token);
    this.notesService = new notes.NotesService(token);
    this.otpService = new otp.OtpService(token);
    this.postcodeService = new postcode.PostcodeService(token);
    this.prayerService = new prayer.PrayerService(token);
    this.qrService = new qr.QrService(token);
    this.quranService = new quran.QuranService(token);
    this.routingService = new routing.RoutingService(token);
    this.rssService = new rss.RssService(token);
    this.sentimentService = new sentiment.SentimentService(token);
    this.smsService = new sms.SmsService(token);
    this.stockService = new stock.StockService(token);
    this.streamService = new stream.StreamService(token);
    this.sunnahService = new sunnah.SunnahService(token);
    this.thumbnailService = new thumbnail.ThumbnailService(token);
    this.timeService = new time.TimeService(token);
    this.twitterService = new twitter.TwitterService(token);
    this.urlService = new url.UrlService(token);
    this.userService = new user.UserService(token);
    this.vehicleService = new vehicle.VehicleService(token);
    this.weatherService = new weather.WeatherService(token);
    this.youtubeService = new youtube.YoutubeService(token);
  }

  addressService: address.AddressService;
  answerService: answer.AnswerService;
  cacheService: cache.CacheService;
  cryptoService: crypto.CryptoService;
  currencyService: currency.CurrencyService;
  dbService: db.DbService;
  emailService: email.EmailService;
  emojiService: emoji.EmojiService;
  evchargersService: evchargers.EvchargersService;
  fileService: file.FileService;
  forexService: forex.ForexService;
  functionService: fx.FunctionService;
  geocodingService: geocoding.GeocodingService;
  gifsService: gifs.GifsService;
  googleService: google.GoogleService;
  helloworldService: helloworld.HelloworldService;
  holidaysService: holidays.HolidaysService;
  idService: id.IdService;
  imageService: image.ImageService;
  ipService: ip.IpService;
  locationService: location.LocationService;
  notesService: notes.NotesService;
  otpService: otp.OtpService;
  postcodeService: postcode.PostcodeService;
  prayerService: prayer.PrayerService;
  qrService: qr.QrService;
  quranService: quran.QuranService;
  routingService: routing.RoutingService;
  rssService: rss.RssService;
  sentimentService: sentiment.SentimentService;
  smsService: sms.SmsService;
  stockService: stock.StockService;
  streamService: stream.StreamService;
  sunnahService: sunnah.SunnahService;
  thumbnailService: thumbnail.ThumbnailService;
  timeService: time.TimeService;
  twitterService: twitter.TwitterService;
  urlService: url.UrlService;
  userService: user.UserService;
  vehicleService: vehicle.VehicleService;
  weatherService: weather.WeatherService;
  youtubeService: youtube.YoutubeService;
}
