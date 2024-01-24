<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'lXZNvyef4E!Y{^54}4!Sw%l%K%k+cPe`S!meSs&?]gVc[<PAOgD44X7O95e1-392' );
define( 'SECURE_AUTH_KEY',   '[=_Vh>+_Af}`=uc!bWJTDY^uS>CJl~elTHH(v]chW[[E9?h[d#5;Fh}i?h]uM~zH' );
define( 'LOGGED_IN_KEY',     'nc_0i9 !+7-GU!r mL|}iq2ldyZJcj0D:i{o)$T(o*fd$5&iHH5R;am2m}:g#j0Y' );
define( 'NONCE_KEY',         'XSmFw}vxEGG`]mp7=zJ}v@lq[_+KEz|<G|p&PCrsEc-Kr=wb]1Lg3rM15C6RPM;T' );
define( 'AUTH_SALT',         'm%-o:iu_$NaubeHu=~G/S#,Hh14exk-pKP3M1#tXwgE$Ieu(M>It;~3T?#D0R0-`' );
define( 'SECURE_AUTH_SALT',  'O4;Mh6(oI9y$NGKg2;*K{--!7#H^V,r>[*dSlod>?R-ODg@;x:lQ#fe?Kl;6.m:5' );
define( 'LOGGED_IN_SALT',    'tZvY{GDBw`?$-?$]v<SAd<MoXj.T}Ev2{#K^4WmGSurWCC?7O!mQ{DqPr?E[x * ' );
define( 'NONCE_SALT',        'WAsB~7<s UEj}HKOy1jtr$Gh:pM73ITVW2@C9Hd#~|>.t2u;LCiD&5Q7j5H.3S12' );
define( 'WP_CACHE_KEY_SALT', '[zQ?QgTv]NrhdA-!j6z{G~7;)aoYK%=VY(yYtGL!/QX[x-hV^t;FGm4D].)ZMYoB' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
