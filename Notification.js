/* Notification Constants

  https://developer.android.com/reference/android/app/Notification.html
  
  Categories (used by category)
    Alarm = "alarm"
    Call = "call"
    Email = "email"
    Error = "err"
    Message = "msg"
    Progress (of long running background operation) = "progress"
    Promo (Advertisement) = "promo"
    Recommendation = "recommendation"
    Reminder (generally user-scheduled) = "reminder"
    Service (background running) = "service"
    Social = "social"
    Status (ongoing) = "status"
    System (reserved for system use) = "sys"
    Transport (Media or Playback) = "transport"
    
  Colors (used by color, ledcolor)
    Default = 0
    White = -1
    Black = -16777216
    Red = -65536
    Green = -16711936
    Blue = -16776961
    Yellow = -256
    Cyan = -16711681
    DarkGray = -12303292
    Gray = -7829368
    LightGray = -3355444
    Magenta = -65281
    
  System Defaults (used by defaults)
    Default All = -1
    Default Sound = 1
    Default Vibrate = 2
    Default Lights = 4
    
  Priorities (used by priority)
    Min = -2
    Low = -1
    Default = 0
    High = 1
    Max = 2
*/

/* Styles
    Big Text: For lots of text
    Inbox: For list of items
    None: None of the above (generic, non-expandable notification)
*/

// Function for choosing an Icon
var icon = (function () {
    var icons = {
        alert_dark_frame: 17301504,
        alert_light_frame: 17301505,
        arrow_down_float: 17301506,
        arrow_up_flat: 17301507,
        bottom_bar: 17301658,
        btn_default: 17301508,
        btn_default_small: 17301509,
        btn_dialog: 17301527,
        btn_dropdown: 17301510,
        btn_minus: 17301511,
        btn_plus: 17301512,
        btn_radio: 17301513,
        btn_star: 17301514,
        btn_star_big_off: 17301515,
        btn_star_big_on: 17301516,
        button_onoff_indicator_off: 17301518,
        button_onoff_indicator_on: 17301517,
        checkbox_off_background: 17301519,
        checkbox_on_background: 17301520,
        dark_header: 17301669,
        dialog_frame: 17301521,
        dialog_holo_dark_frame: 17301682,
        dialog_holo_light_frame: 17301683,
        divider_horizontal_bright: 17301522,
        divider_horizontal_dark: 17301524,
        divider_horizontal_dim_dark: 17301525,
        divider_horizontal_textfield: 17301523,
        edit_text: 17301526,
        editbox_background: 17301528,
        editbox_background_normal: 17301529,
        editbox_dropdown_dark_frame: 17301530,
        editbox_dropdown_light_frame: 17301531,
        gallery_thumb: 17301532,
        ic_btn_speak_now: 17301668,
        ic_delete: 17301533,
        ic_dialog_alert: 17301543,
        ic_dialog_dialer: 17301544,
        ic_dialog_email: 17301545,
        ic_dialog_info: 17301659,
        ic_dialog_map: 17301546,
        ic_input_add: 17301547,
        ic_input_delete: 17301548,
        ic_input_get: 17301549,
        ic_lock_idle_alarm: 17301550,
        ic_lock_idle_charging: 17301534,
        ic_lock_idle_lock: 17301535,
        ic_lock_idle_low_battery: 17301536,
        ic_lock_lock: 17301551,
        ic_lock_power_off: 17301552,
        ic_lock_silent_mode: 17301553,
        ic_lock_silent_mode_off: 17301554,
        ic_media_ff: 17301537,
        ic_media_next: 17301538,
        ic_media_pause: 17301539,
        ic_media_play: 17301540,
        ic_media_previous: 17301541,
        ic_media_rew: 17301542,
        ic_menu_add: 17301555,
        ic_menu_agenda: 17301556,
        ic_menu_always_landscape_portrait: 17301557,
        ic_menu_call: 17301558,
        ic_menu_camera: 17301559,
        ic_menu_close_clear_cancel: 17301560,
        ic_menu_compass: 17301561,
        ic_menu_crop: 17301562,
        ic_menu_day: 17301563,
        ic_menu_delete: 17301564,
        ic_menu_directions: 17301565,
        ic_menu_edit: 17301566,
        ic_menu_gallery: 17301567,
        ic_menu_help: 17301568,
        ic_menu_info_details: 17301569,
        ic_menu_manage: 17301570,
        ic_menu_mapmode: 17301571,
        ic_menu_month: 17301572,
        ic_menu_more: 17301573,
        ic_menu_my_calendar: 17301574,
        ic_menu_mylocation: 17301575,
        ic_menu_myplaces: 17301576,
        ic_menu_preferences: 17301577,
        ic_menu_recent_history: 17301578,
        ic_menu_report_image: 17301579,
        ic_menu_revert: 17301580,
        ic_menu_rotate: 17301581,
        ic_menu_save: 17301582,
        ic_menu_search: 17301583,
        ic_menu_send: 17301584,
        ic_menu_set_as: 17301585,
        ic_menu_share: 17301586,
        ic_menu_slideshow: 17301587,
        ic_menu_sort_alphabetically: 17301660,
        ic_menu_sort_by_size: 17301661,
        ic_menu_today: 17301588,
        ic_menu_upload: 17301589,
        ic_menu_upload_you_tube: 17301590,
        ic_menu_view: 17301591,
        ic_menu_week: 17301592,
        ic_menu_zoom: 17301593,
        ic_notification_clear_all: 17301594,
        ic_notification_overlay: 17301595,
        ic_partial_secure: 17301596,
        ic_popup_disk_full: 17301597,
        ic_popup_reminder: 17301598,
        ic_popup_sync: 17301599,
        ic_search_category_default: 17301600,
        ic_secure: 17301601,
        list_selector_background: 17301602,
        menu_frame: 17301603,
        menu_full_frame: 17301604,
        menuitem_background: 17301605,
        picture_frame: 17301606,
        presence_audio_away: 17301679,
        presence_audio_busy: 17301680,
        presence_audio_online: 17301681,
        presence_away: 17301607,
        presence_busy: 17301608,
        presence_invisible: 17301609,
        presence_offline: 17301610,
        presence_online: 17301611,
        presence_video_away: 17301676,
        presence_video_busy: 17301677,
        presence_video_online: 17301678,
        progress_horizontal: 17301612,
        progress_indeterminate_horizontal: 17301613,
        radiobutton_off_background: 17301614,
        radiobutton_on_background: 17301615,
        screen_background_dark: 17301656,
        screen_background_dark_transparent: 17301673,
        screen_background_light: 17301657,
        screen_background_light_transparent: 17301674,
        spinner_background: 17301616,
        spinner_dropdown_background: 17301617,
        star_big_off: 17301619,
        star_big_on: 17301618,
        star_off: 17301621,
        star_on: 17301620,
        stat_notify_call_mute: 17301622,
        stat_notify_chat: 17301623,
        stat_notify_error: 17301624,
        stat_notify_missed_call: 17301631,
        stat_notify_more: 17301625,
        stat_notify_sdcard: 17301626,
        stat_notify_sdcard_prepare: 17301675,
        stat_notify_sdcard_usb: 17301627,
        stat_notify_sync: 17301628,
        stat_notify_sync_noanim: 17301629,
        stat_notify_voicemail: 17301630,
        stat_sys_data_bluetooth: 17301632,
        stat_sys_download: 17301633,
        stat_sys_download_done: 17301634,
        stat_sys_headset: 17301635,
        /* Deprecated in API level 9
        stat_sys_phone_call: 17301636,
        stat_sys_phone_call_forward: 17301637,
        stat_sys_phone_call_on_hold: 17301638,
        */
        stat_sys_speakerphone: 17301639,
        stat_sys_upload: 17301640,
        stat_sys_upload_done: 17301641,
        /* Deprecated in API level 9
        stat_sys_vp_phone_call: 17301671,
        stat_sys_vp_phone_call_on_hold: 17301672,
        */
        stat_sys_warning: 17301642,
        status_bar_item_app_background: 17301643,
        status_bar_item_background: 17301644,
        sym_action_call: 17301645,
        sym_action_chat: 17301646,
        sym_action_email: 17301647,
        sym_call_incoming: 17301648,
        sym_call_missed: 17301649,
        sym_call_outgoing: 17301650,
        sym_contact_card: 17301652,
        sym_def_app_icon: 17301651,
        title_bar: 17301653,
        title_bar_tall: 17301670,
        toast_frame: 17301654,
        zoom_plate: 17301655
    };
    return function(i) {
        if(icons[i])
            return icons[i];
        else {
            flash("Icon " + i + " does not exist. Using default icon.");
            return 17301504; // alert_dark_frame
        }
    };
})()

// Function for choosing a color
var color = (function() {
    var colors = {
        white: -1,
        black: -16777216,
        red: -65536,
        green: -16711936,
        blue: -16776961,
        yellow: -256,
        cyan: -16711681,
        darkgray: -12303292,
        gray: -7829368,
        lightgray: -3355444,
        magenta: -65281
    };
    return function(c) {
        if(colors[c])
            return colors[c];
        else {
            flash("Color " + c + " does not exist. Using white");
            return -1;
        }
    };
})()

// Instantiate Object
var Notification = function() {
    this.title = "Title";
    this.text = "Text";
    this.style = "none";
    this.iconpicker = "small";
    this.icon = 17301583;
    this.idn = 1;
    this.dismissontouch = false;
    this.persistent = false;
    this.buttons = [];
};

// Prototype Functions
Notification.prototype.create = function() { performTask("Notify", 7, JSON.stringify(this)); };
Notification.prototype.fill = function(n) { Object.keys(n).forEach(function(k) { this[k] = n[k]; }, this); };
Notification.prototype.addbutton = function(t, l, i) { this.buttons.push({task: t || "No Task", label: l || "Button", icon: i || 17301504}); };
Notification.prototype.preset = function(p) {
    switch(p) {
        case "reminder":
            this.addbutton("Notification Close", "OK", 17301583);
            this.defaults = -1;
            this.iconpicker = "small";
            this.icon = 17301583;
            break;
        case "weather":
            this.addbutton("Update Weather", "Update", icon("ic_dialog_info"));
            this.addbutton("Weather Scene", "More", icon("ic_menu_more"));
            this.priority = 1;
            this.iconpicker = "custom";
            this.style = "bigtext";
            this.persistent = true;
            this.idn = 7; // Make sure ID #7 is only used for the weather notification to be updated
            break;
        default:
            break;
    }
};