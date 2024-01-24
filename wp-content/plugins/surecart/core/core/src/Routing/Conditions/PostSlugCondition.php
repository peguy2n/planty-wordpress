<?php
/**
 * @package   SureCartCore
 * @author    SureCart <support@surecart.com>
 * @copyright 2017-2019 SureCart
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0
 * @link      https://surecart.com/
 */

namespace SureCartCore\Routing\Conditions;

use SureCartCore\Requests\RequestInterface;

/**
 * Check against the current post's slug.
 *
 * @codeCoverageIgnore
 */
class PostSlugCondition implements ConditionInterface {
	/**
	 * Post slug to check against
	 *
	 * @var string
	 */
	protected $post_slug = '';

	/**
	 * Constructor
	 *
	 * @codeCoverageIgnore
	 * @param string $post_slug
	 */
	public function __construct( $post_slug ) {
		$this->post_slug = $post_slug;
	}

	/**
	 * {@inheritDoc}
	 */
	public function isSatisfied( RequestInterface $request ) {
		$post = get_post();
		return ( is_singular() && $post && $this->post_slug === $post->post_name );
	}

	/**
	 * {@inheritDoc}
	 */
	public function getArguments( RequestInterface $request ) {
		return [ 'post_slug' => $this->post_slug ];
	}
}
