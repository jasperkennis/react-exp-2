import axios from 'axios';
import https from 'https';
import jQuery from 'jquery';

/**
 * Performs an ajax call when needed (when the data is not populated yet)
 *
 * @param {Object} props                   Properties currently worked on
 * @param {string} [url=props.option.step] The url to fetch. Defaults to the
 *                                         step property of options
 *
 * @return {void}
 */
export default function (props, url = props.option.url) {
  const agent = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  });

  props.funnelClearStep();

  agent.get(`https://www.drukzo.nl.local${url}`).then((res) => {
    const html = res.data.replace(/<img[^>]*>/g, '');
    const _$obj = jQuery(html);
    const _$active_block = _$obj.find('.step.active').closest('.block');
    const options = [];
    const step = _$active_block.data('oid');

    _$active_block.find('.step-contents a').each(function (i, e) {
      const _$ = jQuery(e);

      if (_$.attr('id') && _$.attr('href')) {
        options.push({
          url: _$.attr('href').split('#')[0],
          name: _$.attr('id')
        });
      }
    });

    props.funnelSetOptions(options);

    props.funnelSetStep(step);
  });
}
